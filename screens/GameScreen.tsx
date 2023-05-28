import {
	StyleSheet,
	View,
	Alert,
	SafeAreaView,
	Platform,
	Text,
	FlatList,
} from 'react-native'
import { useEffect, useLayoutEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import uuid from 'react-native-uuid'

import {
	Card,
	CustomTitle,
	LogItem,
	NumberContainer,
	PrimaryButton,
} from '../components'
import { colors } from '../constants'
import { GameScreenProps } from '../types'
import { GradientWrapper } from '../layout'
import { BackIcon } from '../icons'
import { getRandomIntNumberBetween } from '../utils'

let minBoundary = 1
let maxBoundary = 100

export default function GameScreen({ route, navigation }: GameScreenProps) {
	const [userNumber, setUserNumber] = useState<number | null>(null)
	const initialGuess = getRandomIntNumberBetween(1, 100)
	const [currentGuess, setCurrentGuess] = useState(initialGuess)
	const [guessRounds, setGuessRounds] = useState<number[]>([initialGuess])
	const [refreshing, setRefreshing] = useState(false)

	useLayoutEffect(() => {
		const userPickedNumber = Number(route?.params?.userPickedNumber || 0)
		setUserNumber(userPickedNumber)
		const randomNumber = getRandomIntNumberBetween(1, 100, userPickedNumber)
		setCurrentGuess(randomNumber)
	}, [navigation, route])

	const guessRoundsListLength = guessRounds.length

	function restState() {
		setGuessRounds([])
		minBoundary = 1
		maxBoundary = 100
	}

	useEffect(() => {
		if (currentGuess === userNumber) {
			restState()
			navigation.navigate('GameOver', {
				userPickedNumber: userNumber,
				guessRound: guessRoundsListLength,
			})
		}
	}, [currentGuess, userNumber])

	function nextGuessHandler(direction: 'Lower' | 'Greater') {
		// direction => 'lower', 'greater'
		if (
			(userNumber && direction === 'Lower' && currentGuess < userNumber) ||
			(userNumber && direction === 'Greater' && currentGuess > userNumber)
		) {
			Alert.alert('Invalid Guess', 'Please choose a valid direction.', [
				{
					text: 'Cancel',
					onPress: () => console.log('Cancel Pressed'),
					style: 'cancel',
				},
			])
			return
		}

		if (direction === 'Lower') {
			maxBoundary = currentGuess
		} else {
			minBoundary = currentGuess + 1
		}

		const newRndNumber = getRandomIntNumberBetween(
			minBoundary,
			maxBoundary,
			currentGuess,
		)
		setCurrentGuess(newRndNumber)
		setGuessRounds((prevGuessRounds) => [newRndNumber, ...prevGuessRounds])
	}

	const handleRefresh = () => {
		setRefreshing((prevState) => !prevState)
	}

	const myItemSeparator = () => {
		return <View style={{ backgroundColor: 'grey' }} />
	}

	const myListEmpty = () => {
		return null
	}

	return (
		<GradientWrapper>
			<SafeAreaView style={styles.droidSafeArea}>
				<BackIcon
					onPress={() => {
						restState()
						navigation.goBack()
					}}
				/>
				<CustomTitle>Opponent,s Guess</CustomTitle>
				<NumberContainer>{currentGuess}</NumberContainer>
				<View style={styles.buttonsContainer}>
					<Card style={styles.card}>
						<Text style={styles.text}> Higher or lower?</Text>
						<View style={styles.buttonsContainer}>
							<PrimaryButton
								buttonTitle="+"
								onPress={() => {
									nextGuessHandler('Greater')
								}}
								buttonOuterContainerStyle={styles.buttonOuterContainerStyle}
								buttonInnerContainerStyle={styles.buttonInnerContainer}
								androidRippleColor={colors.primary600}
								buttonTexStyle={styles.buttonTexStyle}>
								<Ionicons name="md-add" size={24} color="white" />
							</PrimaryButton>

							<PrimaryButton
								buttonTitle="-"
								onPress={() => {
									nextGuessHandler('Lower')
								}}
								buttonOuterContainerStyle={styles.buttonOuterContainerStyle}
								buttonInnerContainerStyle={styles.buttonInnerContainer}
								androidRippleColor={colors.primary600}
								buttonTexStyle={styles.buttonTexStyle}>
								<Ionicons name="md-remove" size={24} color="white" />
							</PrimaryButton>
						</View>
					</Card>
				</View>

				<View style={styles.listContainer}>
					<FlatList
						alwaysBounceVertical={false}
						data={guessRounds}
						renderItem={({ item, index, separators }) => (
							<LogItem
								guess={item}
								roundedNumber={guessRoundsListLength - index}
							/>
						)}
						keyExtractor={(item) => uuid.v4() as string}
						ItemSeparatorComponent={myItemSeparator}
						ListEmptyComponent={myListEmpty}
						refreshing={refreshing}
						onRefresh={handleRefresh}
					/>
				</View>
			</SafeAreaView>
		</GradientWrapper>
	)
}

const styles = StyleSheet.create({
	droidSafeArea: {
		flex: 1,
		paddingTop: Platform.OS === 'android' ? 25 : 10,
		margin: 15,
	},
	buttonsContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	buttonTexStyle: { fontWeight: 'bold', fontSize: 25 },
	buttonOuterContainerStyle: {
		margin: 4,
		flex: 1,
		borderRadius: 28,
		marginTop: 10,
	},
	buttonInnerContainer: {
		backgroundColor: colors.primary500,
		elevation: 2,
	},
	card: {
		flex: 1,
		backgroundColor: colors.primary800,
		alignItems: 'center',
	},
	text: {
		color: colors.yellow500,
		fontSize: 20,
		fontWeight: 'bold',
		fontFamily: 'open-sans',
	},
	logsContainer: {
		flexDirection: 'column',
	},
	listContainer: {
		flex: 1,
		flexDirection: 'column',
		paddingVertical: 5,
	},
})

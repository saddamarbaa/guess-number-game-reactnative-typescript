import {
	StyleSheet,
	View,
	ImageBackground,
	Alert,
	SafeAreaView,
} from 'react-native'
import { PrimaryButton } from '../components'
import { LinearGradient } from 'expo-linear-gradient'

import { RootTabScreenProps } from '../types'
import { useLayoutEffect, useState } from 'react'
import { colors } from '../constants'
import { Tittle } from '../components/Title'

export default function GameScreen({
	route,
	navigation,
}: RootTabScreenProps<'Game'>) {
	const [enteredNumber, setEnteredNumber] = useState('')
	const [userNumber, setUserNumber] = useState<null | number>(null)

	useLayoutEffect(() => {
		setUserNumber(Number(route?.params?.userPickedNumber || 0))
	}, [navigation])

	const numberInputHandler = (enteredNumber: string) =>
		setEnteredNumber(enteredNumber)

	const restInputHandler = () => setEnteredNumber('')

	const confirmInputHandler = () => {
		const re = /^\d*(\.\d+)?$/

		const chosenNumber = parseInt(enteredNumber)
		if (!enteredNumber.match(re) || chosenNumber <= 0 || chosenNumber > 99) {
			Alert.alert(
				'Invalid number',
				'Number has to be a number between 0 and 99',
				[{ text: 'ok', style: 'destructive', onPress: restInputHandler }],
			)
			return
		}
	}

	return (
		<LinearGradient
			colors={[
				'#4e0329',
				colors.yellow500,
				colors.yellow500,
				colors.yellow500,
				colors.yellow500,
			]}
			style={styles.container}>
			<ImageBackground
				source={require('../assets/images/background.png')}
				resizeMode="cover"
				style={styles.container}
				imageStyle={styles.backgroundImage}>
				<SafeAreaView style={styles.screen}>
					<Tittle>Opponent,s Guess</Tittle>
					<View style={styles.buttonsContainer}>
						<PrimaryButton
							buttonTitle="+"
							onPress={confirmInputHandler}
							buttonOuterContainerStyle={styles.buttonOuterContainerStyle}
							buttonInnerContainerStyle={styles.buttonInnerContainer}
							androidRippleColor="#640233"
						/>
						<PrimaryButton
							buttonTitle="-"
							onPress={restInputHandler}
							buttonOuterContainerStyle={styles.buttonOuterContainerStyle}
							buttonInnerContainerStyle={styles.buttonInnerContainer}
							androidRippleColor="#640233"
						/>
					</View>
				</SafeAreaView>
			</ImageBackground>
		</LinearGradient>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	screen: {
		flex: 1,
		padding: 40,
		marginHorizontal: 20,
	},

	buttonsContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	buttonOuterContainerStyle: {
		margin: 4,
		flex: 1,
	},
	buttonInnerContainer: {
		backgroundColor: '#72063c',
		elevation: 2,
		borderRadius: 28,
		margin: 4,
	},
	backgroundImage: {
		opacity: 0.5,
	},
})

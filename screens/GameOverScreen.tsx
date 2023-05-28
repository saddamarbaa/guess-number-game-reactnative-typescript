import React from 'react'
import {
	StyleSheet,
	View,
	SafeAreaView,
	Platform,
	Image,
	Text,
} from 'react-native'

import { CustomTitle, PrimaryButton } from '../components'
import { colors } from '../constants'
import { GameOverScreenProps } from '../types'
import { GradientWrapper } from '../layout'
import { BackIcon } from '../icons'
import { windowHeight, windowWidth } from '../utils'

export default function GameScreen({ route, navigation }: GameOverScreenProps) {
	const { guessRound, userPickedNumber } = route.params

	const redirect = () => {
		navigation.navigate('StartGame')
	}

	return (
		<GradientWrapper>
			<SafeAreaView style={styles.droidSafeArea}>
				<BackIcon onPress={redirect} />
				<CustomTitle>Game Over</CustomTitle>
				<View style={styles.imageContainer}>
					<Image
						style={styles.imageStyle}
						source={require('../assets/images/success.png')}
					/>
				</View>
				<Text style={styles.summaryText}>
					Congratulations! Your phone successfully guessed the number{' '}
					<Text style={styles.text}> {userPickedNumber}</Text> in
					{guessRound === 1 ? (
						' one guess '
					) : (
						<Text style={styles.text}>{` ${guessRound}`}</Text>
					)}
					{` guesses`}.
				</Text>
				<View style={styles.buttonsContainer}>
					<PrimaryButton
						buttonTitle="Start New Game"
						onPress={redirect}
						buttonOuterContainerStyle={styles.buttonOuterContainerStyle}
						buttonInnerContainerStyle={styles.buttonInnerContainer}
						androidRippleColor={colors.primary600}
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
		// alignItems: 'center',
		// justifyContent: 'center'
	},
	buttonsContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	buttonOuterContainerStyle: {
		margin: 4,
		flex: 1,
		borderRadius: 28,
		marginTop: 20,
	},
	buttonInnerContainer: {
		backgroundColor: colors.primary500,
		elevation: 2,
	},
	imageContainer: {
		width: windowWidth < 380 || windowHeight < 380 ? 150 : 300,
		height: windowWidth < 380 || windowHeight < 380 ? 150 : 300,
		borderRadius: windowWidth < 380 || windowHeight < 380 ? 75 : 150,
		borderWidth: 3,
		borderColor: colors.primary800,
		overflow: 'hidden',
		alignSelf: 'center',
		marginTop: 30,
	},
	imageStyle: {
		flex: 1,
		width: '100%',
		height: '100%',
		resizeMode: 'cover', // Adjust the image content to cover the entire circular area
	},
	summaryText: {
		marginTop: 20,
		fontFamily: 'open-sans-bold',
		fontSize: 20,
		textAlign: 'center',
	},
	text: {
		color: colors.primary500,
	},
})

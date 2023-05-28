import {
	StyleSheet,
	View,
	Alert,
	Keyboard,
	Text,
	Platform,
	SafeAreaView,
	useWindowDimensions,
} from 'react-native'
import React, { useLayoutEffect, useState } from 'react'

import { StartGameScreenProps } from '../types'
import { colors } from '../constants'
import { Card, CustomInput, CustomTitle, PrimaryButton } from '../components'
import { GradientWrapper } from '../layout'

export default function StartGameScreen({
	route,
	navigation,
}: StartGameScreenProps) {
	const [enteredNumber, setEnteredNumber] = useState('')
	const { width, height } = useWindowDimensions()
	const marginTopDistance = height < 380 ? 30 : 100

	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false,
		})
	}, [navigation])

	const numberInputHandler = (enteredNumber: string) =>
		setEnteredNumber(enteredNumber)

	const dismissKeyboard = () => {
		Keyboard.dismiss()
	}

	const restInputHandler = () => {
		dismissKeyboard()
		setEnteredNumber('')
	}

	const confirmInputHandler = () => {
		const re = /^\d*(\.\d+)?$/
		const chosenNumber = parseInt(enteredNumber)

		if (
			!enteredNumber ||
			!re.test(enteredNumber) ||
			chosenNumber <= 0 ||
			chosenNumber > 99
		) {
			Alert.alert(
				'Invalid number',
				'Please enter a valid number between 0 and 99',
				[
					{
						text: 'OK',
						style: 'destructive',
						onPress: restInputHandler,
					},
				],
			)
			return
		} else {
			const userPickedNumber = enteredNumber
			setEnteredNumber('')
			navigation.navigate('Game', {
				userPickedNumber: userPickedNumber,
			})
		}
	}
	return (
		<GradientWrapper>
			<SafeAreaView
				style={[styles.droidSafeArea, { marginTop: marginTopDistance }]}>
				<CustomTitle>Opponent,s Guess</CustomTitle>
				<Card style={styles.card}>
					<Text style={styles.text}>Enter a number</Text>
					<CustomInput
						value={enteredNumber}
						onChangeText={numberInputHandler}
						placeholder=""
						inputStyle={styles.input}
						selectionColor={colors.yellow500}
						autoCapitalize="none"
						blurOnSubmit
						autoCorrect={false}
						maxLength={2}
						keyboardType="number-pad"
					/>

					<View style={styles.buttonsContainer}>
						<PrimaryButton
							buttonTitle="Confirm"
							onPress={confirmInputHandler}
							buttonOuterContainerStyle={styles.buttonOuterContainerStyle}
							buttonInnerContainerStyle={styles.buttonInnerContainer}
							androidRippleColor={colors.primary600}
						/>

						<PrimaryButton
							buttonTitle="Rest"
							onPress={restInputHandler}
							buttonOuterContainerStyle={styles.buttonOuterContainerStyle}
							buttonInnerContainerStyle={styles.buttonInnerContainer}
							androidRippleColor={colors.primary600}
						/>
					</View>
				</Card>
			</SafeAreaView>
		</GradientWrapper>
	)
}

const styles = StyleSheet.create({
	droidSafeArea: {
		flex: 1,
		paddingTop: Platform.OS === 'android' ? 25 : 10,
		margin: 20,
		// marginTop: windowHeight < 380 ? 25 : 100,
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
	container: {
		flex: 1,
	},
	card: {
		backgroundColor: colors.primary800,
		marginVertical: 20,
		alignItems: 'center',
	},
	input: {
		height: 56,
		fontSize: 27,
		borderBottomColor: colors.yellow500,
		borderWidth: 0,
		borderBottomWidth: 2,
		color: colors.yellow500,
		marginHorizontal: 8,
		fontWeight: 'bold',
		marginBottom: 8,
		maxWidth: 90,
		textAlign: 'center',
		borderRadius: 0,
	},
	text: {
		color: colors.yellow500,
		fontSize: 20,
		fontWeight: 'bold',
		fontFamily: 'open-sans',
	},
})

import { View, Text, Button, StyleSheet } from 'react-native'
import React, { useLayoutEffect } from 'react'

import { HomeScreenProps } from '../types'

import { TextInput } from 'react-native-gesture-handler'

export default function HomeScreen({ route, navigation }: HomeScreenProps) {
	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false,
		})
	}, [navigation])

	return (
		<View style={styles.container}>
			{/* <Header title="Guess a number" /> */}
			<View>
				<View>
					<Text>Select number</Text>
					{/* <TextInput /> */}

					<View style={styles.buttonsContainer}>
						<Button title="Rest" onPress={() => {}} />
						<Button title="Confirm" onPress={() => {}} />
					</View>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	card: {
		marginTop: 100,
		// backgroundColor: colors.primary800,
		marginHorizontal: 20,
		alignItems: 'center',
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
	},
	buttonInnerContainer: {
		// backgroundColor: colors.primary500,
		elevation: 2,
	},
	input: {
		height: 50,
		fontSize: 32,
		// borderBottomColor: colors.yellow500,
		borderBottomWidth: 2,
		// color: colors.yellow500,
		marginHorizontal: 8,
		fontWeight: 'bold',
		marginBottom: 8,
		width: '100%',
		maxWidth: 70,
		textAlign: 'center',
	},
	backgroundImage: {
		opacity: 0.5,
	},
})

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'

import { colors } from '../../constants'
import Card from '../ui/Card'

type Props = {
	roundedNumber: number
	guess: number
}
export function LogItem({ guess, roundedNumber }: Props) {
	return (
		<Card style={styles.card}>
			<Text style={styles.itemText}>{`#${roundedNumber}`}</Text>
			<Text style={styles.itemText}> Opponent,s Guess: {guess}</Text>
		</Card>
	)
}

export default LogItem

const styles = StyleSheet.create({
	card: {
		borderRadius: 20,
		padding: 40,
		marginVertical: 8,
		backgroundColor: colors.accent,
		flexDirection: 'row',
		justifyContent: 'space-between',
		elevation: 4,
		shadowColor: 'black',
		shadowOffset: {
			width: 0,
			height: 0,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3,
	},
	itemText: {
		color: colors.white,
		fontSize: 15,
		fontWeight: 'bold',
		fontFamily: 'open-sans-bold',
	},
})

import { View, Text, TextStyle, StyleSheet } from 'react-native'
import React from 'react'

import { colors } from '../../constants'

type Props = {
	children?: React.ReactNode
	style?: TextStyle
}

export function NumberContainer({ children }: Props) {
	return (
		<View style={styles.container}>
			<Text style={styles.number}>{children}</Text>
		</View>
	)
}

export default NumberContainer

const styles = StyleSheet.create({
	container: {
		borderWidth: 3,
		borderColor: colors.white,
		padding: 20,
		borderRadius: 8,
		margin: 20,
		alignItems: 'center',
		justifyContent: 'center',
		fontSize: 24,
		textAlign: 'center',
	},
	number: {
		color: colors.white,
		fontSize: 45,
		// fontWeight: 'bold',
		fontFamily: 'open-sans-bold',
	},
})

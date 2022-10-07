import React from 'react'
import { StyleSheet, Text, TextStyle } from 'react-native'
import { colors } from '../constants'

type TittleType = {
	children: React.ReactNode
	style?: TextStyle
}

export function Tittle({ children, style }: TittleType) {
	return <Text style={[styles.title, style]}>{children}</Text>
}

const styles = StyleSheet.create({
	title: {
		fontSize: 24,
		color: colors.yellow500,
		textAlign: 'center',
		borderWidth: 2,
		borderColor: colors.yellow500,
		padding: 12,
	},
})

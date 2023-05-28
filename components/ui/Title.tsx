import React from 'react'
import { StyleSheet, Text, TextStyle, Platform } from 'react-native'
import { colors } from '../../constants'

type TittleType = {
	children: React.ReactNode
	style?: TextStyle
}

export function CustomTitle({ children, style }: TittleType) {
	return <Text style={[styles.title, style]}>{children}</Text>
}

const styles = StyleSheet.create({
	title: {
		fontFamily: 'open-sans-bold',
		fontSize: 24,
		color: colors.white,
		textAlign: 'center',
		// borderWidth:2,
		// borderWidth: Platform.OS === 'android' ? 2 : 2,
		borderWidth: Platform.select({ ios: 2, android: 2 }),
		borderColor: colors.white,
		padding: 12,
	},
})

export default CustomTitle

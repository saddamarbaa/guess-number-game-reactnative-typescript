import React from 'react'
import { View, StyleSheet, ViewStyle } from 'react-native'

type CardDType = {
	children: React.ReactNode
	style?: ViewStyle
}

export function Card({ children, style }: CardDType) {
	return <View style={[cardStyles.card, style]}>{children}</View>
}

const cardStyles = StyleSheet.create({
	card: {
		// Ios
		shadowOffset: { width: 0, height: 3 },
		shadowOpacity: 0.4,
		shadowRadius: 2,
		borderRadius: 6,
		shadowColor: 'black',
		// Android
		elevation: 8,
		// All
		backgroundColor: 'white',
		margin: 10,
		fontSize: 22,
		// width: '100%',
		textAlign: 'center',
		padding: 16,
	},
})

export default Card

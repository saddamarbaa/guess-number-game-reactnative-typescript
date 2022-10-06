import React from 'react'
import {
	Text,
	StyleSheet,
	View,
	Pressable,
	ViewStyle,
	TextStyle,
} from 'react-native'
import { windowHeight } from '../utils'

type ButtonType = {
	buttonTitle: string
	onPress?: () => void
	btnType?: string
	buttonOuterContainerStyle?: ViewStyle
	buttonInnerContainerStyle?: ViewStyle
	buttonTexStyle?: TextStyle
	androidRippleColor?: string
}

export function PrimaryButton({
	buttonTitle,
	btnType,
	buttonTexStyle,
	buttonOuterContainerStyle,
	buttonInnerContainerStyle,
	androidRippleColor,
	onPress,
	...rest
}: ButtonType) {
	return (
		<View style={[styles.buttonOuterContainer, buttonOuterContainerStyle]}>
			<Pressable
				{...rest}
				style={({ pressed }) =>
					pressed
						? [
								styles.buttonInnerContainer,
								buttonInnerContainerStyle,
								styles.pressed,
						  ]
						: [styles.buttonInnerContainer, buttonInnerContainerStyle]
				}
				android_ripple={{
					color: androidRippleColor ? androidRippleColor : '#1954df',
				}}
				onPress={onPress}>
				<Text style={[styles.buttonText, buttonTexStyle]}>{buttonTitle}</Text>
			</Pressable>
		</View>
	)
}

const styles = StyleSheet.create({
	buttonOuterContainer: {
		borderRadius: 6,
		cursor: 'pointer',
		overflow: 'hidden',
	},
	buttonInnerContainer: {
		backgroundColor: '#2e64e5',
		paddingVertical: 8,
		paddingHorizontal: 16,
		elevation: 2,
		height: windowHeight / 15,
		maxHeight: 45,
	},
	buttonText: {
		fontSize: 18,
		fontWeight: 'bold',
		color: '#ffffff',
		textAlign: 'center',
	},
	pressed: {
		opacity: 0.5,
	},
})

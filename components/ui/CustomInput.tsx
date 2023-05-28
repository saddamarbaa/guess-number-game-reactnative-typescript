import React from 'react'
import {
	StyleSheet,
	TextInput,
	TextInputProps,
	StyleProp,
	ViewStyle,
} from 'react-native'

interface CustomInputProps extends TextInputProps {
	placeholder: string
	label?: string
	value: string
	onChangeText: (text: string) => void
	inputStyle?: StyleProp<ViewStyle>
}

export function CustomInput({
	inputStyle,
	placeholder,
	...rest
}: CustomInputProps) {
	return (
		<TextInput
			style={[styles.input, inputStyle]}
			placeholder={placeholder}
			{...rest}
		/>
	)
}

export default CustomInput

const styles = StyleSheet.create({
	input: {
		padding: 14,
		flexDirection: 'row',
		width: '100%',
		fontSize: 17,
		borderWidth: 1,
		borderRadius: 8,
		// backgroundColor: '#e4d0ff',
		borderColor: '#e4d0ff',
		// marginVertical: 10,
		// color: '#120438',
	},
})

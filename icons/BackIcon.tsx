import * as React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { StyleSheet, View } from 'react-native'

import { colors } from '../constants'

interface Props {
	color?: string
	size?: number
	onPress?: () => void
}

export function BackIcon({
	onPress,
	color = colors.primary500,
	size = 30,
}: Props) {
	return (
		<View style={styles.headerContainer}>
			<View style={styles.goBackIconContainer}>
				<Ionicons
					name="arrow-back"
					size={size}
					color={colors}
					onPress={onPress}
				/>
			</View>
		</View>
	)
}

export default BackIcon

const styles = StyleSheet.create({
	headerContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: 10,
	},
	goBackIconContainer: {
		marginLeft: 10,
	},
})

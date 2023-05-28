import React, { ReactNode } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { ImageBackground, StyleSheet } from 'react-native'
import { colors } from '../constants'

interface GradientWrapperProps {
	children: ReactNode
}

export const GradientWrapper: React.FC<GradientWrapperProps> = ({
	children,
}) => {
	return (
		<LinearGradient colors={colors.gradient} style={styles.container}>
			<ImageBackground
				source={require('../assets/images/background.png')}
				resizeMode="cover"
				style={styles.imageBackground}
				imageStyle={styles.imageStyle}>
				{children}
			</ImageBackground>
		</LinearGradient>
	)
}

export default GradientWrapper

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	imageBackground: {
		flex: 1,
	},
	imageStyle: {
		opacity: 0.5,
	},
})

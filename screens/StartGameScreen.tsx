import { StyleSheet, TextInput, View, ImageBackground } from 'react-native'
import { Card, PrimaryButton } from '../components'
import { LinearGradient } from 'expo-linear-gradient'

import { RootTabScreenProps } from '../types'

export default function StartGameScreen({
	navigation,
}: RootTabScreenProps<'StartGame'>) {
	return (
		<LinearGradient
			colors={['#4e0329', '#ddb52f', '#ddb52f', '#ddb52f', '#ddb52f']}
			style={styles.container}>
			<ImageBackground
				source={require('../assets/images/background.png')}
				resizeMode="cover"
				style={styles.container}
				imageStyle={styles.backgroundImage}>
				<Card style={styles.card}>
					<TextInput
						style={styles.input}
						maxLength={2}
						keyboardType="number-pad"
						autoCapitalize="none"
						autoCorrect={false}
					/>
					<View style={styles.buttonsContainer}>
						<PrimaryButton
							buttonTitle="Confirm"
							onPress={() => console.log(5)}
							buttonOuterContainerStyle={styles.buttonOuterContainerStyle}
							buttonInnerContainerStyle={styles.buttonInnerContainer}
							androidRippleColor="#640233"
						/>
						<PrimaryButton
							buttonTitle="Rest"
							onPress={() => console.log(5)}
							buttonOuterContainerStyle={styles.buttonOuterContainerStyle}
							buttonInnerContainerStyle={styles.buttonInnerContainer}
							androidRippleColor="#640233"
						/>
					</View>
				</Card>
			</ImageBackground>
		</LinearGradient>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	card: {
		marginTop: 100,
		backgroundColor: '#3b201f',
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
	},
	buttonInnerContainer: {
		backgroundColor: '#72063c',
		elevation: 2,
		borderRadius: 28,
		margin: 4,
	},
	input: {
		height: 50,
		fontSize: 32,
		borderBottomColor: '#ddb52f',
		borderBottomWidth: 2,
		color: '#ddb52f',
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

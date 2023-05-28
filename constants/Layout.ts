import { Dimensions } from 'react-native'
import { colors } from './colors'

export const width = Dimensions.get('window').width
export const height = Dimensions.get('window').height

export default {
	window: {
		width,
		height,
	},
	isSmallDevice: width < 375,
}

export const GlobalScreenOption = {
	headerStyle: { backgroundColor: colors.main },
	headerTitleStyle: { color: '#fff' },
	headerTintColor: '#fff',
}

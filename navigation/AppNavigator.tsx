import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'

import { BottomTabNavigator } from './BottomTabNavigator '
import { tintColorLight } from '../constants'

const MyTheme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		primary: 'rgb(255, 45, 85)',
		text: '#000',
		background: '#fff',
		tint: tintColorLight,
		tabIconDefault: '#ccc',
		tabIconSelected: tintColorLight,
	},
}

export function AppNavigator() {
	return (
		<NavigationContainer theme={MyTheme}>
			<StatusBar style="light" />
			<BottomTabNavigator />
		</NavigationContainer>
	)
}

export default AppNavigator

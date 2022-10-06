import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as React from 'react'
import { ColorSchemeName } from 'react-native'
import { StatusBar } from 'expo-status-bar'

import ModalScreen from '../screens/ModalScreen'
import NotFoundScreen from '../screens/NotFoundScreen'
import { RootStackParamList } from '../types'
import StartGameScreen from '../screens/StartGameScreen'

const customTheme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		background: '#ddb52f',
	},
}

export default function Navigation({
	colorScheme,
}: {
	colorScheme: ColorSchemeName
}) {
	return (
		<NavigationContainer theme={customTheme}>
			<RootNavigator />
			<StatusBar style="light" />
		</NavigationContainer>
	)
}

const Stack = createNativeStackNavigator<RootStackParamList>()

function RootNavigator() {
	return (
		<Stack.Navigator
			initialRouteName="StartGame"
			screenOptions={{
				headerShown: false,
			}}>
			<Stack.Screen name="StartGame" component={StartGameScreen} />
			<Stack.Screen
				name="NotFound"
				component={NotFoundScreen}
				options={{ title: 'Oops!' }}
			/>
			<Stack.Group screenOptions={{ presentation: 'modal' }}>
				<Stack.Screen name="Modal" component={ModalScreen} />
			</Stack.Group>
		</Stack.Navigator>
	)
}

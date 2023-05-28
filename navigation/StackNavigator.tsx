import * as React from 'react'
import {
	createNativeStackNavigator,
	NativeStackScreenProps,
} from '@react-navigation/native-stack'

import { RootStackParamList } from '../types'
import HomeScreen from '../screens/HomeScreen'
import ProfileScreen from '../screens/ProfileScreen'
import DetailsScreen from '../screens/DetailsScreen'
import GameOverScreen from '../screens/GameOverScreen'

const Stack = createNativeStackNavigator<RootStackParamList>()

export function StackNavigator() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Home" component={HomeScreen} />
			<Stack.Screen name="Profile" component={ProfileScreen} />
			<Stack.Screen name="Details" component={DetailsScreen} />
			<Stack.Screen name="GameOver" component={GameOverScreen} />
		</Stack.Navigator>
	)
}

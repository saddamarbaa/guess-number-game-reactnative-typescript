import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Route, getFocusedRouteNameFromRoute } from '@react-navigation/native'

import { RootStackParamList } from '../types'
import { colors } from '../constants'
import StartGameScreen from '../screens/StartGameScreen'
import GameScreen from '../screens/GameScreen'
import GameOverScreen from '../screens/GameOverScreen'
import { View } from 'react-native'

const Tab = createBottomTabNavigator<RootStackParamList>()

export function BottomTabNavigator() {
	const getTabBarVisibility = (route: Partial<Route<string>>) => {
		const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed'

		if (routeName === 'GameDetails') {
			return 'none'
		}
		return 'flex'
	}

	return (
		<Tab.Navigator
			initialRouteName="StartGame"
			screenOptions={({ route }) => ({
				// ...GlobalScreenOption,
				headerShown: false,
				tabBarShowLabel: false,
				tabBarActiveTintColor: colors.accent,
				tabBarInactiveTintColor: colors.accent,
				tabBarStyle: {
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					backgroundColor: colors.yellow500,
				},
				// tabBarIcon: ({ focused, color, size }) => {
				// 	let iconName
				// 	if (route.name === 'StartGame') {
				// 		iconName = focused ? 'home-outline' : 'home-outline'
				// 		return <Ionicons name={iconName} size={size} color={color} />
				// 	} else if (route.name === 'Game') {
				// 		iconName = 'home-outline'
				// 		return <Ionicons name={iconName} size={size} color={color} />
				// 	}
				// 	return null
				// },
			})}>
			<Tab.Screen
				name="StartGame"
				component={StartGameScreen}
				options={({ route }) => ({
					title: '',
					tabBarStyle: {
						display: getTabBarVisibility(route),
						backgroundColor: colors.yellow500,
						// paddingTop: 2,
						// alignItems: 'center',
						// justifyContent: 'center',
					},
					tabBarLabelStyle: {
						// fontWeight: 'bold',
						// fontSize: 16,
						// color: '#fff',
					},
					tabBarIcon: ({ color, size }) => (
						<Ionicons name="home-outline" size={30} color={color} />
					),
				})}
			/>
			<Tab.Screen
				name="Game"
				component={GameScreen}
				options={{
					tabBarButton: () => null,
					// tabBarBadge: 3,
					// tabBarBadgeStyle: { backgroundColor: 'yellow' },
					// tabBarIcon: ({ color, size }) => {
					// 	return (
					// 		<View>
					// 			<FontAwesomeIcon name={'gamepad'} size={32} color={color} />
					// 		</View>
					// 	)
					// },
				}}
			/>

			<Tab.Screen
				name="GameOver"
				component={GameOverScreen}
				options={{ tabBarButton: () => null }} // To hide the icon
			/>

			{/* <Tab.Screen
				name="Profile"
				component={ProfileScreen}
				initialParams={{ userId: 'ok' }}
				options={({ route }) => ({ title: route.params.userId })}
			/> */}
			{/* <Tab.Screen
				name="Details"
				component={DetailsScreen}
				initialParams={{ id: 'tets' }}
				options={{
					headerTitle: (props) => (
						<View>
							<Text>Return icon</Text>
						</View>
					),
					headerRight: () => (
						<Button
							onPress={() => alert('This is a button!')}
							title="Info"
							color="#fff"
						/>
					),
					title: '',
					tabBarIcon: () => null,
				}}
			/> */}
		</Tab.Navigator>
	)
}

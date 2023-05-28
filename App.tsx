import React, { useEffect, useCallback } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'

import { AppNavigator } from './navigation'

export default function App() {
	const [fontsLoaded] = useFonts({
		'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
		'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
	})

	useEffect(() => {
		preventAutoHideSplashScreen()
	}, [])

	const preventAutoHideSplashScreen = useCallback(async () => {
		try {
			await SplashScreen.preventAutoHideAsync()
		} catch (error) {
			console.warn('Error preventing splash screen auto hide:', error)
		}
	}, [])

	const hideSplashScreen = useCallback(async () => {
		try {
			await SplashScreen.hideAsync()
		} catch (error) {
			console.warn('Error hiding splash screen:', error)
		}
	}, [])

	useEffect(() => {
		if (fontsLoaded) {
			hideSplashScreen()
		}
	}, [fontsLoaded, hideSplashScreen])

	if (!fontsLoaded) {
		return null
	}

	return (
		<SafeAreaProvider>
			<AppNavigator />
		</SafeAreaProvider>
	)
}

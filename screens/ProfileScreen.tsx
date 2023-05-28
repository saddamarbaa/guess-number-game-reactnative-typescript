import { View, Text, Button } from 'react-native'
import React from 'react'

import { ProfileScreenProps } from '../types'

export default function ProfileScreen({
	route,
	navigation,
}: ProfileScreenProps) {
	/* 2. Get the param */
	const { userId } = route.params
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>ProfileScreen {userId}</Text>
			<Button
				title="Go to Details"
				onPress={() => {
					/* 1. Navigate to the Details route with params */
					navigation.navigate('Details', {
						id: 86,
						otherParam: 'anything you want here',
					})
				}}
			/>

			<Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
			<Button
				title="Update the title"
				onPress={() => navigation.setOptions({ title: 'Updated!' })}
			/>
		</View>
	)
}

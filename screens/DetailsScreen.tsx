import { View, Text, Button } from 'react-native'
import React from 'react'

import { DetailsScreenProps } from '../types'
import GradientWrapper from '../layout/ GradientWrapper'

export default function DetailsScreen({
	route,
	navigation,
}: DetailsScreenProps) {
	/* 2. Get the param */
	const { id, otherParam } = route.params

	return (
		<GradientWrapper>
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text>Details Screen</Text>
				<Text>itemId: {JSON.stringify(id)}</Text>
				<Text>otherParam: {JSON.stringify(otherParam)}</Text>
				<Button
					title="Go to Details... again"
					onPress={() =>
						navigation.push('Details', {
							id: Math.floor(Math.random() * 100) + '',
						})
					}
				/>
				<Button
					title="Go to Home"
					onPress={() => navigation.navigate('Home')}
				/>
				<Button title="Go back" onPress={() => navigation.goBack()} />
			</View>
		</GradientWrapper>
	)
}

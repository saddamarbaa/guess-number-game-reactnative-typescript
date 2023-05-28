import {
	NavigatorScreenParams,
	CompositeScreenProps,
} from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import type { StackScreenProps } from '@react-navigation/stack'
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs'

export type RootStackParamList = {
	Home: undefined
	Details: {
		id: string | number
		otherParam?: string
	}
	Profile: {
		userId: string
	}
	StartGame: undefined
	Game: { userPickedNumber: string }
	GameOver: {
		userPickedNumber: number
		guessRound: number
	}
}

export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>
export type ProfileScreenProps = NativeStackScreenProps<
	RootStackParamList,
	'Profile'
>

export type DetailsScreenProps = NativeStackScreenProps<
	RootStackParamList,
	'Details'
>

export type StartGameScreenProps = NativeStackScreenProps<
	RootStackParamList,
	'StartGame'
>

export type GameScreenProps = NativeStackScreenProps<RootStackParamList, 'Game'>

export type GameOverScreenProps = NativeStackScreenProps<
	RootStackParamList,
	'GameOver'
>

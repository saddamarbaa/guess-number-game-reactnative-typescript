import { Dimensions } from 'react-native'
export const windowWidth = Dimensions.get('window').width
export const windowHeight = Dimensions.get('window').height

export function getRandomIntNumberBetween(
	min: number,
	max: number,
	exclude?: number,
	maxAttempts: number = 100,
): number {
	let attempt = 0

	while (attempt < maxAttempts) {
		const rndNum = Math.floor(Math.random() * (max - min)) + min

		if (rndNum !== exclude) {
			return rndNum
		}

		attempt++
	}

	return min + 1
}

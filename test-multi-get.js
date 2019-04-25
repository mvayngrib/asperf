import { Alert, AsyncStorage } from 'react-native'

export const runAndTime = async (fn) => {
	const start = Date.now()
	await fn()
	return Date.now() - start
}

export const compareGetVsMultiGet = async (data) => {
	console.log('writing')

	await AsyncStorage.multiSet(data)

	const keys = data.map(([key]) => key)

	console.log('testing multiGet')
	const multiGetTime = await runAndTime(() =>
		Promise.all(keys.map((key) => AsyncStorage.multiGet([key])))
	)

	console.log('testing getItem')
	const getItemTime = await runAndTime(() =>
		Promise.all(keys.map((key) => AsyncStorage.getItem(key)))
	)

	return {
		getItem: getItemTime,
		multiGet: multiGetTime,
	}
}

export const testWithValues = (n, valueSize) => {
	const data = Array.from({ length: n }).map((_, i) => [String(i), 'a'.repeat(valueSize)])
	return compareGetVsMultiGet(data)
}

export const testWithSmallValues = (n) => testWithValues(n, 20)
export const testWithMediumValues = (n) => testWithValues(n, 200)
export const testWithLargeValues = (n) => testWithValues(n, 10000)

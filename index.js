/**
 * @format
 */

import { AppRegistry, Alert, AsyncStorage } from 'react-native'
import App from './App'
import { name as appName } from './app.json'

AppRegistry.registerComponent(appName, () => App)

import { testWithSmallValues, testWithMediumValues, testWithLargeValues } from './test-multi-get'

setTimeout(async () => {
	const small = await testWithSmallValues(100)
	const medium = await testWithMediumValues(100)
	const large = await testWithLargeValues(100)

	Alert.alert('getItem vs multiGet', JSON.stringify({ small, medium, large }, null, 2))
}, 2000)

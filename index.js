/**
 * @format
 */

import { AppRegistry, Alert, AsyncStorage } from 'react-native'
import App from './App'
import { name as appName } from './app.json'

AppRegistry.registerComponent(appName, () => App)

import { testWithValues, compareGetVsMultiGet } from './test-multi-get'

setTimeout(async () => {
  const twentyBytes = await testWithValues({ n: 100, valueLength: 20 })
  const twoHundredBytes = await testWithValues({ n: 100, valueLength: 200 })
  const tenKB = await testWithValues({ n: 100, valueLength: 10000 })
  const mixed = await compareGetVsMultiGet(
    Array.from({ length: 100 }).map((_, i) => [String(i), 'a'.repeat(Math.random() * 10000)])
  )

  Alert.alert(
    'getItem vs multiGet',
    JSON.stringify({ twentyBytes, twoHundredBytes, tenKB, mixed }, null, 2)
  )
}, 2000)

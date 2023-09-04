import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screens/Login'
import Register from '../screens/Register'
import Home from '../screens/Home'
import ProductInfo from '../screens/ProductInfo'

const StackNavigation = () => {
    const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='home'>
            <Stack.Screen name="login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="register" component={Register} options={{ headerShown: false }} />
            <Stack.Screen name="home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="ProductInfo" component={ProductInfo} options={{ headerShown: false }} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigation
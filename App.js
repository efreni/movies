import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import Home from './Home'
import Favorities from './Favorities'

const MainNavigator = createStackNavigator({
  Home: { screen: Home },
  Favorities: { screen: Favorities },
})

const App = createAppContainer(MainNavigator)

export default App

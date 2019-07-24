import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import Home from './Home'
import Favorities from './Favorities'
import SingleMovie from './SingleMovie'

const MainNavigator = createStackNavigator({
  Home: { screen: Home },
  Favorities: { screen: Favorities },
  SingleMovie: { screen: SingleMovie },
})

const App = createAppContainer(MainNavigator)

export default App

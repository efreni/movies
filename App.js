import React from 'react'
import { View } from 'react-native'
import Header from './src/components/Header'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import Favorities from './Favorities'
//import MovieList from './src/components/MovieList';
//aggiungere import dei componenti , Header, MovieList non appena pronti
//<MovieList />

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Favorities: { screen: Favorities },
})

const App = createAppContainer(MainNavigator)

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Movies',
  }
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={{ flex: 1 }}>
        <Header />
      </View>
    )
  }
}

export default App

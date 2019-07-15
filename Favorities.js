import { View } from 'react-native'
import Header from './src/components/Header'
import React from 'react'
import Button from './src/components/Button'

class Home extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: <Header headerText={'Favorities'} />,
    headerRight: (
      <Button
        title="Cuoricino"
        color="#0074D9"
        onPress={() => {
          alert('Qui ci va messo un cuoricino!')
        }}
      />
    ),
  })

  /*static navigationOptions = ({ navigation }) => ({
    title: 'My Profile!',
    headerRight: (
      <Button
        title="Menu"
        onPress={() => {
          navigation.navigate('Favorities')
        }}
      />
    ),
  })*/
  render() {
    return <View style={{ flex: 1 }} />
  }
}
export default Home

import { View } from 'react-native'
import Header from './src/components/Header'
import React from 'react'
import Button from './src/components/Button'

class Home extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerLeft: 'suka',
    headerTitle: <Header headerText={'Movies'} />,
    headerRight: (
      <Button
        title="Favorities"
        color="#0074D9"
        onPress={() => {
          navigation.navigate('Favorities')
        }}
      />
    ),
  })

  render() {
    return <View style={{ flex: 1 }} />
  }
}
export default Home

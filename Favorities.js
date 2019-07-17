import { View } from 'react-native'
import Header from './src/components/Header'
import React from 'react'
import Icon from 'react-native-ionicons'

class Home extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerStyle: {
      backgroundColor: '#F8F8F8',
      borderBottomColor: 'transparent',
    },
    headerLeft: (
      <Icon
        style={styles.iconLeft}
        name="arrow-back"
        onPress={() => {
          alert('Qui ci va messo un cuoricino!')
        }}
      />
    ),
    headerTitle: <Header headerText={'Favorities'} />,
    headerRight: (
      <Icon
        style={styles.iconRight}
        name="heart-empty"
        onPress={() => {
          alert('Qui ci va messo un cuoricino!')
        }}
      />
    ),
  })

  render() {
    return <View style={{ flex: 1 }} />
  }
}
const styles = {
  iconLeft: {
    flex: 1,
    color: '#0074D9',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    paddingLeft: 12,
    height: 40,
    width: 40,
    paddingTop: 5,
  },
  iconRight: {
    flex: 1,
    color: '#0074D9',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    height: 40,
    width: 40,
    paddingTop: 5,
  },
}
export default Home

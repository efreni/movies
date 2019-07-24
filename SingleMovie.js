import { View, Text } from 'react-native'
import React from 'react'
import MovieList from './src/components/MovieList'

class SingleMovie extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Movies',
    headerRight: (
      <Text
        style={styles.favoritiesText}
        onPress={() => {
          navigation.navigate('Favorities')
        }}
      >
        Favorities
      </Text>
    ),
  })

  render() {
    return (
      <View>
        <MovieList />
      </View>
    )
  }
}

const styles = {
  favoritiesText: {
    color: '#0074D9',
    fontSize: 20,
    paddingRight: 15,
  },
}
export default SingleMovie

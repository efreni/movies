//this page is used in order to show details about a single movie(so, in a list, of every movie that have been fetched)

import React from 'react'
import { Text, View, Image } from 'react-native'
import Card from './Card'
import CardSection from './CardSection'
import Icon from 'react-native-ionicons'
import { TouchableOpacity } from 'react-native-gesture-handler'

const MovieDetail = ({ movie }) => {
  const { title, vote_average, poster_path, original_language, overview, release_date } = movie
  const {
    posterPictureContainer,
    posterPictureStyle,
    titleStyle,
    detailsStyle,
    movieInfoStyle,
    dateAndRankStyle,
    icon,
  } = styles

  let releaseYear = release_date.substring(0, release_date.length - 6)
  //console.log('https://image.tmdb.org/t/p/w600_and_h900_bestv2/' + poster_path)

  return (
    <Card>
      <TouchableOpacity
        onPress={() => {
          // navigation.navigate('Favorities')
        }}
      >
        <CardSection>
          <View style={posterPictureContainer}>
            <Image
              style={posterPictureStyle}
              source={{ uri: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/' + poster_path }}
            />
          </View>
          <View style={movieInfoStyle}>
            <Text style={titleStyle}>{title}</Text>
            <View style={dateAndRankStyle}>
              <Icon size={15} style={icon} name="calendar" color="#D3D3D3" />
              <Text style={detailsStyle}>{releaseYear}</Text>
              <Icon size={15} style={icon} name="star" color="#FFD700" />
              <Text>{vote_average}</Text>
            </View>
          </View>
        </CardSection>
      </TouchableOpacity>
    </Card>
  )
}

const styles = {
  posterPictureStyle: {
    width: 60,
    height: 60,
  },
  movieInfoStyle: {
    paddingLeft: 5,
  },
  posterPictureContainer: {
    height: 60,
    width: 60,
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  detailsStyle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: 'grey',
  },
  dateAndRankStyle: {
    flex: 1,
    flexDirection: 'row',
  },
  icon: {
    padding: 1,
    paddingLeft: 5,
    width: 20,
    height: 20,
  },
}

export default MovieDetail

import React, { Component } from 'react'
import { Text, ScrollView } from 'react-native'
import axios from 'axios'
//import MovieDetail from './MovieDetail';

class MovieList extends Component {
  state = { movies: [] }

  componentDidMount() {
    axios
      .get('https://api.themoviedb.org/3/movie/top_rated?api_key=a74169393e0da3cfbc2c58c5feec63d7')
      .then(response => this.setState({ movies: response.data.results }))
  }

  renderMovies() {
    return this.state.movies.map(movie => <Text>{movie.title}</Text>)
  }

  render() {
    console.log(this.state)
    return <ScrollView>{this.renderMovies()}</ScrollView>
  }
}
export default MovieList

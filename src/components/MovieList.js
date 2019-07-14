import React, { Component } from 'react'rr
import { ScrollView } from 'react-native'
import axios from 'axios'
// import MovieDetail from './MovieDetail';

class MovieList extends Component {
  state = { topRatedMovies: [] }

  componentDidMount() {
    axios
      .get('https://api.themoviedb.org/3/movie/top_rated?api_key=a74169393e0da3cfbc2c58c5feec63d7')
      .then(response => this.setState({ albums: response.data }))
  }

  renderMovies() {
    //    return this.state.topRatedMovies.map(topRatedMovies);
  }

  render() {
    return <ScrollView>{this.renderMovies()}</ScrollView>
  }
}
export default MovieList

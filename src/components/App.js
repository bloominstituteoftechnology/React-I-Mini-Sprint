import React, { Component } from 'react';
import { render } from 'react-dom';

import MoviesList from './MoviesList';

class App extends Component {
  constructor() {
    super();

    this.state = {
      movies: ['Alien', 'Highlander', 'Star Wars: A New Hope'],
    };
  }

  render() {
    return (
      <MoviesList movies = {this.state.movies}/>
    )
  }
}

export default App;

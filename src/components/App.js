import React, { Component } from 'react';
import { render } from 'react-dom';
import MoviesList from './MoviesList.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: ['Mad Max: Fury Road', 'Birdman', 'Super Troopers']
    };
  }

  render() {
    return (
      <MoviesList movies={this.state.movies} />
    );
  }
}

export default App

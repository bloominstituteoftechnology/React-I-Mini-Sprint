import React, { Component } from 'react';
import MoviesList from './MoviesList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [
        'Forrest Gump',
        'Blade Runner',
        'Super Bad',
        'Enemy of the State',
        'The Matrix'
      ]
    };
  }
  render() {
    return <MoviesList movies={this.state.movies} />;
  }
}

export default App;

import React, { Component } from 'react';
import { render } from 'react-dom';
import MoviesList from './MoviesList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: ['Step Brothers', 'Elf', 'Anchorman', 'Talladega Nights', 'Blades of Glory']
    };
  }
  render() {
    return (
      <MoviesList movies={this.state.movies}/>
    );
  }
}

export default App;

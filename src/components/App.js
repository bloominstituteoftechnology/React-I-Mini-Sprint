// Step 1: Import React, and Component from react.
// Step 2: Import render from react-dom
// Step 3: Import MoviesList from MoviesList

// Step 4: Write a class called App, extending Component.
  // Step 5: Write a constructor function without passing anything into it.
    // Step 6: Inside the constructor function, call super without passing anything into it.
import React, { Component } from 'react';
import { render } from 'react-dom';
import MoviesList from './MoviesList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: ['The Shining', 'Event Horizon', 'It Follows', 'Nightmare on Elm Street']
    };
  }

  render() {
    return (
      <div>
        <MoviesList movies={this.state.movies} />
      </div>
    )
  }
}

export default App;
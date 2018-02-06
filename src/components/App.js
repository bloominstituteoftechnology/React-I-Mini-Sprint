import React, { Component } from "react";
import { render } from "react-dom";
import MoviesList from "./MoviesList";

class App extends Component {
  constructor() {
    super();

    this.state = {
      movies: ["Dude, Where's My Car?", "MacGruber", "Hot Rod"],
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

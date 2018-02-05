// Import React from react.
import React from 'react';
import Component from 'react';
import { render } from 'react-dom';

/*
// Create a const arrow function called MoviesList.
const MoviesList = () => {
  // Return an unordered list.
  return (
    // Inside the unordered list, embed a javascript expression (curly brackets).
    <ul>
    {movies.map( (movie, i) => { // Inside the javascript expression, map the movies array with two arguments, movie and i (for index).
      // The function should return a list item, with a javascript expression movie (the same variable as map).
      return (
        // The list item should have an attribute called key, that takes in i as a javascript expression.
        <li key={i}>{movie}</li>
      );
    })}
    </ul>
  );
};
*/

class MoviesList extends Component {
  state = {
    movies: [
      {
        id: 1,
        title: "Jumanji"
      },
      {
        id: 2,
        title: "Avengers: Infinity War"
      },
      {
        id: 3,
        title: "Solo: A Star Wars Story"
      },
      {
        id: 4,
        title: "Ready Player One"
      },
    ],
  };

  render() {
    return (
      <div className="movies-list">
      
      </div>
    )
  }
}

// Outside the arrow function, export the function MoviesList as a default.
export default MoviesList;

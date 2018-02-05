// Import React from react.
import React from 'react';
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

// Outside the arrow function, export the function MoviesList as a default.
export default MoviesList;
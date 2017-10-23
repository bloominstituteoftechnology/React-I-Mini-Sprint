// Import React from react.
import React from 'react';

const MoviesList = props => {
  return (
    <div>
      <input type="text" value={props.title} onChange={props.changeHandler} />
      <button onClick={props.addToMovies}>Submit Movie</button>
      <ul>
        {props.movies.map((movie, i) => {
          return <li key={i + 1}>{movie}</li>;
        })}
      </ul>
    </div>
  );
};
export default MoviesList;

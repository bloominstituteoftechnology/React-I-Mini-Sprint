import React from 'react';

const MoviesList = props => {
  return (
    <ul>
      {props.movies.map((movie, i) => {
        return <li key={i + 1}>{movie}</li>;
      })}
    </ul>
  );
};

export default MoviesList;

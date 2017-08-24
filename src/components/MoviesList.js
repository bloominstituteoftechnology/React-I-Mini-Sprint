import React from 'react';

export const MoviesList = (props) => {
  return (
      <ul>
        {props.movies.map((movie, i) => (
          <li key={i}>{movie}</li>
       ))}
      </ul>
  )
}

export default MoviesList;
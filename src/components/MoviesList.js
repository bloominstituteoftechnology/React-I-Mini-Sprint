import React from "react";

const MoviesList = (props) => {
  return (
    <ul>
      {props.movies.map((movie, i) => {
        return <li key={i}>{movie}</li>
      })}
    </ul>
    )
}

export default MoviesList;

import React from 'react';

const MoviesList = ({movies}) => {
    return (
    <ul>
      { movies.map((movie, i) => (<li key={i}>{movie}</li>)) }
    </ul>
    );
};

export default MoviesList
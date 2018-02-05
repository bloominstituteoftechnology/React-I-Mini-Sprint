import React from 'react';
import { render } from 'react-dom';

import App from './components/App';

const movies = [
  {
    id: 1,
    title: 'Lord of the rings',
  },
  {
    id: 2,
    title: 'The Hobbit',
  },
  {
    id: 3,
    title: 'Star Wars',
  }
]

function Movie(props) {
  return <li key={props.movie.id}>{movie.title}</li>;
}

class MovieList extends React.Component {
  render() {
    console.log('movies', this.props.films);
    return ( // this is also a way of writing react components
      <div className="movie-list">
        <h1>Movies List Component</h1>
        <ul>
          {this.props.movies.map((movie) => {
            return <Movie key={movie.id} movie={movie} />
          })}
        </ul>
      </div>
    );
  }
}

render(<MovieList films={movies} />, document.getElementById('root'));

// JSX expression
// a component can accept props

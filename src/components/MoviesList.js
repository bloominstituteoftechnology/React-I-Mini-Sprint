// Import React from react.

// Create a const arrow function called MoviesList.
// Return an unordered list
// Inside the unordered list, embed a javascript expression (curly brackets).
// Inside the javascript expression, map the movies array
// The function inside map should take in two arguments, movie and i (for index).
// The function should return a list item, with a javascript expression movie (the same variable as map).
// The list item should have an attribute called key, that takes in i as a javascript expression.
// Outside the arrow function, export the function MoviesList as a default.
import React from 'react';
import Movie from './Movie.js';

class MovieList extends React.Component {
    constructor() {
        super();
        this.state = {
            movies: [
            {
                id:1,
                title: 'the',
            },
            {   
                id:2,
                title: 'two',

            },
            {   
                id:3,
                title: 'three',

            },
            {   
                id:4,
                title: 'four',

            }
        ]
        };
    }
 render() {
        return (
        <div className = 'movie-list'>
        <h1> Movies List</h1>
            <ul>
                {this.state.movies.map(movie => {
                    return <Movie key={movie.id} movie={movie} />;
                })}
            </ul>
        </div>
        );
    }
}

export default MovieList;

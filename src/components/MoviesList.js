
import React from "react";// Import React from react.

MoviesList = () => { // Create a const arrow function called MoviesList.
    return <ul>{ // Return an unordered list // Inside the unordered list, embed a javascript expression (curly brackets).
    movies.map(cb => (movie, i) => { // Inside the javascript expression, map the movies array // The function inside map should take in two arguments, movie and i (for index).
        return <li>{movie}</li>;// The function should return a list item, with a javascript expression movie (the same variable as map).
                
    })}</ul>;
};
// The list item should have an attribute called key, that takes in i as a javascript expression.
export default MoviesList;// Outside the arrow function, export the function MoviesList as a default.

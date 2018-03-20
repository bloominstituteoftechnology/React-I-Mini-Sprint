// Step 1: Import React, and Component from react.

import React , {Component} from "react";

// Step 2: Import render from react-dom

import {render} from 'react-dom';
// Step 3: Import MoviesList from MoviesList

import MoviesList from './MoviesList';

// Step 4: Write a class called App, extending Component.
class App extends Component{
    constructor () {  // Step 5: Write a constructor function without passing anything into it.
        super() // Step 6: Inside the constructor function, call super without passing anything into it.
        this.state = { // Step 7: Inside the constructor function, create a state on this, and set it to an object.
          movies: ["Batman", "Superman", "Avengers"] };  
          // Step 8: Inside the object, set a key to movies, and the value to an array of movies
    }
    render() { // Step 9: Write a render function.
        return ( // Step 10: Inside the render function, write a return statement.
            < MoviesList movies = {
                this.state.movies
            }
            />
            // Step 11: Inside the return statement, write a selfclosing tag called MoviesList
            // Step 12: Inside the selfclosing tag, give it an attribute called movies,
            // and pass it this.state.movies inside a set of curly bracket.
        )
            
         }

    }


export default App;







// Step 13: Outside the class, export the App class as a default.

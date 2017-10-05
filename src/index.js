import React from 'react';
import { render } from 'react-dom';
// import hello from './Hello';//this is from sean codesandbox vid example for index.js
// import ClassComponentExample from './ClassComponentExample';//also from sean
// next line is constApp = ( =>{
// <div><Hello name="Sean" />
// <ClassComponentExample />
// <h2>Start editing to see some magic happen {'\u2728'}</h2>
// </div>
// );
// render(<App />, document.getElementById('root'));
// })
import App from './components/App';

render(<App />, document.getElementById('root'));


/*//here is all of Sean's example with comments:
import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import ClassComponentExample from './ClassComponentExample';
// App is itself nothing more than a functional component that renders some children components
const App = () => (
  <div>
    //{/* This is the Hello compoent we're importing at the top of the file */
    //{/* Notice how we're passing it `name="Codesandbox"; this is how we pass props to components */}
    //<Hello name="Sean" />
    ///{/* Here, we'll add our ClassComponentExample component */}
    //{/* User-defined components need to a capitalized */}
    //<ClassComponentExample />
    //<h2>Start editing to see some magic happen {'\u2728'}</h2>
  //</div>
//);
// This `render` method is different from the `render` we saw in the ClassComponentExample
// This `render` does the work of mounting our root App component to the DOM by targeting
// the 'root' div in our index.html file
//render(<App />, document.getElementById('root'));*/

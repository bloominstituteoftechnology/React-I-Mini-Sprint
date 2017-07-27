# React Mini I

## Topics

* Class vs Function components
* State
* this.setState
* Props

## Lesson Plan

### Recursion

All loops can be written recursively.  
Functions overview (HOF, callbacks, anonymous functions, assigned to variables, added to arrays, and they can call themselves!).  
Call stack  
Base case  
Iterate towards base case  
Iteration is usually better than recursion but recursion can be simpler to write at times  

Class Component example:

```
class App extends Component {
  constructor() {
    super();
    this.state = {
      items: ['item1', 'item2', 'item3'],
    };
  }
  render() {
    return (
      <div>Your content here
        <SomeOtherComponent items={this.state.items} />
      </div>

    )
  }
}
```

Functional Component example: 

```
const SomeOtherComponent = (props) => {
  // props comes in as an object. React knows how to pass this down based on the attributes given.
  // in here you can do stuff with props. 
  // Because this is a functional component you can simply iterate over a list of given elements and render them out to the term.
  return (
    <ul>
      {props.map((element) => {
        return <li>{element}</li>
      })}
    </ul>
  )
}
```


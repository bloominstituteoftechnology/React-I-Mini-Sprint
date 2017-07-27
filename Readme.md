# React Mini I

## Topics

* React, A bird's eye view
* Class vs Function components
* State
* this.setState
* Props

## Lesson Plan

### Class Component example:

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
      // every react component only renders out a single DOM element. 
      <div> // Your content here
        // notice that I called this array "items" and set it equal to this.state.items
        // react will read this attribute "items" and create and object called `props` that will look like this
          `props = {items: ['item1', 'item2', 'item3']}` You can access this `props object` in the child component `SomeOtherComponent`
        <SomeOtherComponent items={this.state.items} />
      </div>

    )
  }
}
```

### Functional Component example: 

```
const SomeOtherComponent = (props) => {
  // props comes in as an object. React knows how to pass this down based on the attributes given.
  // in here you can do stuff with props. 
  // Because this is a functional component you can simply iterate over a list of given elements and render them out to the term.
  return (
    <ul>
      {props.items.map((element) => {
        return <li>{element}</li>
      })}
    </ul>
  )
}
```


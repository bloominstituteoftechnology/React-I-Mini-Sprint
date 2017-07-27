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
  render them out to the term.   
  return (
    <ul>
      {props.items.map((element) => {
        return <li>{element}</li>
      })}
    </ul>
  )
}
```
- React tells `props` to come in as an obj. React knows this component needs props because we set them on as an attribute on `<SomeOtherComponent items={this.state.props}/>` as 'items'.
- Now inside of `<SomeOtherComponent />` you can do stuff with `props`. Notice we're passing props in as a param. It will be an object called props that you can reference.
- Because this is a functional component you can simply iterate over a list of given elements and render each element to the screen.


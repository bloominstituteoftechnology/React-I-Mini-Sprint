# React Mini I

## Topics

* [React, A bird's eye view](http://slides.com/w33ble/understanding-react)
* Class vs Function components
* state
* this.setState
* props
* [Life Cycle Methods](https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1)

## Lesson Plan
- Start in the `App.js` file in the components directory.
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
      <div>
        <SomeOtherComponent items={this.state.items} />
      </div>
    )
  }
}
```
- Note that every react component only renders out a single DOM element. So if you have more elements to render out, they'll need to be wrapped in a single element. You cannot render sibling elements.
- Note also the use of the `constructor()` and `super()`. When you `extend` a class you need to call `super()` to pass back up the elements to the original class. We are `extending` `Component` which is a class that comes from React.
- Notice that I called this array "items" and set it equal to this.state.items.
- React will read this attribute "items" and create and object called `props` that will look like this
`props = {items: ['item1', 'item2', 'item3']}` You can access this `props object` in the child component `SomeOtherComponent`
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


import SmartCode from '../components/SmartCode';
import Hidden from '../components/Hidden';

<SmartCode>

```jsx
class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Hello',
      array: ['item1'],
      object: { property: 'value' },
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.state.text = 'Hello World';
    this.state.array.push('item2');
    this.state.object.property = 'new value';
  }

  render() {
    return (
      <>
        <div>{this.state.text}</div>
        {this.state.array.map(item => (
          <div>{item}</div>
        ))}
        <div>{this.state.object.property}</div>
        <button onClick={this.handleClick}>Click</button>
      </>
    );
  }
}
```

</SmartCode>

<Hidden>

```js
  updateText() {
    this.setState(
      (prevState) => ({
        text: prevState.text + (prevState.text.length + 1),
      }),
      this.validate
    );
  }
```

</Hidden>

import SmartCode from '../components/SmartCode';
import Hidden from '../components/Hidden';

<SmartCode konsole>

```jsx
class Demo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '12345',
    };

    this.handleClick = this.handleClick.bind(this);
    this.updateText = this.updateText.bind(this);
    this.validate = this.validate.bind(this);
    this.reset = this.reset.bind(this);
  }

  handleClick() {
    this.updateText();
    this.updateText();
  }

  updateText() {
    this.setState({
      text: this.state.text + (this.state.text.length + 1),
    });
    this.validate();
  }

  validate() {
    if (this.state.text.length > 7) konsole.log('broken');
  }

  reset() {
    this.setState({ text: '12345' });
  }

  render() {
    return (
      <>
        <div>{this.state.text}</div>
        <button onClick={this.handleClick}>Add</button>
        <button onClick={this.reset}>Reset</button>
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

import SmartCode from '../components/SmartCode';
import Hidden from '../components/Hidden';

<SmartCode konsole>

```jsx
class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '123' };

    this.addOnce = this.addOnce.bind(this);
    this.addTwice = this.addTwice.bind(this);
    this.validate = this.validate.bind(this);
    this.reset = this.reset.bind(this);
  }

  addOnce() {
    this.setState({
      text: this.state.text + (this.state.text.length + 1),
    });
    this.validate();
  }

  validate() {
    if (this.state.text.length > 7) konsole.log('broken');
  }

  addTwice() {
    this.setState({
      text: this.state.text + (this.state.text.length + 1),
    });
    this.setState({
      text: this.state.text + (this.state.text.length + 1),
    });
  }

  reset() {
    this.setState({ text: '123' });
  }

  render() {
    return (
      <>
        <div>
          <h2>{this.state.text}</h2>
        </div>
        <button onClick={this.addOnce}>Add</button>
        <button onClick={this.addTwice}>Add twice</button>
        <button onClick={this.reset}>Reset</button>
      </>
    );
  }
}
```

</SmartCode>

<Hidden>

- fix `addOnce` by moving validate to callback
- fix `addTwice` by using function setState
- Note callback is also queued at the end when the setState queue is flushed.

```js
  addOnce() {
    this.setState({
      text: this.state.text + (this.state.text.length + 1),
    }, this.validate);
  }

  addTwice() {
    this.setState((prevState) => ({
      text: prevState.text + (prevState.text.length + 1),
    }));
    this.setState((prevState) => ({
      text: prevState.text + (prevState.text.length + 1),
    }));
  }
```

</Hidden>

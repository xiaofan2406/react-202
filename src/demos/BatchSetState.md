import SmartCode from '../components/SmartCode';

<SmartCode konsole>

```jsx
class Demo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: 'Hello',
    };

    this.handleClick = this.handleClick.bind(this);
    this.add = this.add.bind(this);
  }

  componentDidMount() {
    this.add();
    this.add();
  }

  handleClick() {
    this.add();
    this.add();
  }

  add() {
    this.setState({
      text: 'Hello',
    });
  }

  render() {
    konsole.log('render');
    return (
      <>
        <div>{this.state.text}</div>
        <button onClick={this.handleClick}>Click</button>
      </>
    );
  }
}
```

</SmartCode>

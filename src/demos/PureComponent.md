import SmartCode from '../components/SmartCode';

<SmartCode konsole>

```jsx
class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Hello' };
    this.changeText = this.changeText.bind(this);
  }

  changeText() {
    this.setState(prev => ({
      text: prev.text + ' world',
    }));
  }

  callback() {
    konsole.log('child rendered');
  }

  render() {
    const { text } = this.state;
    return (
      <div>
        <div>
          <button onClick={this.changeText}>Click</button>
        </div>
        <NormalChild text={text} didUpdate={this.callback} />
      </div>
    );
  }
}
```

</SmartCode>

```jsx,editable,konsole
class Demo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: 'Hello',
    };

    this.changeText = this.changeText.bind(this);
  }

  changeText() {
    this.setState(prev => ({
      text: prev.text + ' world',
    }));
  }

  render() {
    const { text } = this.state;
    return (
      <div>
        <div>
          <button onClick={this.changeText}>Click</button>
        </div>
        <NormalChild text={text} />
      </div>
    );
  }
}
```

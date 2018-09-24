import Navigation from '../components/Navigation';
import Spacer from '../components/Spacer';
import Hidden from '../components/Hidden';
import SmartCode from '../components/SmartCode';
import DemoDialog, { SetState, BatchSetState } from '../demos';

# What is setState

```jsx
class Child extends React.Component {
  state = {
    text: '12345',
  };

  updateText = () => {
    this.setState({
      text: this.state.text + (this.state.text.length + 1),
    });
  };

  render() {
    return (
      <>
        <div>{this.state.text}</div>
        <button onClick={this.updateText}>Add</button>
      </>
    );
  }
}
```

<Spacer />

<DemoDialog title="Set State">
  <SetState />
</DemoDialog>

<DemoDialog title="Batch setState">
  <BatchSetState />
</DemoDialog>

<Hidden>

- `state` is another form of data, usually changeable via user interaction.
- calling `setState` trigger re-render so that the view is always synced with data.
- `setState` is asynchronous, but does not return promise.
- there are a lot of traps

</Hidden>

<Navigation {...props} />

import Navigation from '../components/Navigation';
import Spacer from '../components/Spacer';
import Hidden from '../components/Hidden';
import DemoDialog, { PureComponent } from '../demos';

# PureComponent

#### React.PureComponent & Pure React.Component

```jsx,inline
class Child extends React.PureComponent {
  static propTypes = {
    text: PropTypes.string.isRequired,
  };

  state = {
    show: false,
  };

  render() {
    const { text } = this.props;
    const { show } = this.state;
    return show ? <span>{text}</span> : null;
  }
}
```

```jsx,inline
class Child extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
  };

  state = {
    show: false,
  };

  shouldComponentUpdate(nextProps, nextState) {
    Object.keys(nextProps).forEach(name => {
      if (nextProps[name] !== this.props[name]) {
        return true;
      }
    });
    Object.keys(nextState).forEach(name => {
      if (nextState[name] !== this.state[name]) {
        return true;
      }
    });
    return false;
  }

  render() {
    const { text } = this.props;
    const { show } = this.state;
    return show ? <span>{text}</span> : null;
  }
}
```

<DemoDialog>
  <PureComponent />
</DemoDialog>

<Hidden>

- These two are the same, exactly.
- The shouldComponentUpdate is what PureComponent represents.
- Shallow compare every property of the props and state
- note the !==

</Hidden>

<Navigation {...props} />

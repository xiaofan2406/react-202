import Navigation from '../components/Navigation';

# PureComponent

```jsx
class Child extends React.PureComponent {
  state = {
    show: false,
  };

  render() {
    const { text } = this.props;
    const { show } = this.props;
    return show ? <span>{text}</span> : null;
  }
}
```

```jsx
class Child extends React.Component {
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
    const { show } = this.props;
    return show ? <span>{text}</span> : null;
  }
}
```

<Navigation {...props} />

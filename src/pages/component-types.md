import Navigation from '../components/Navigation';

# Functional Component vs Class Component

These two are the same, when `state` is not needed

```jsx
const Child = () => <span>child</span>;
```

```jsx
class Child extends React.Component {
  render() {
    return <span>child</span>;
  }
}
```

<Navigation {...props} />

import Navigation from '../components/Navigation';
import Spacer from '../components/Spacer';
import Hidden from '../components/Hidden';

# Functional Component vs Class Component

#### Functional Component

```jsx
const Child = () => <span>child</span>;
```

<Spacer />

#### Class Component

```jsx
class Child extends React.Component {
  render() {
    return <span>child</span>;
  }
}
```

<Hidden>

- These two are the same, when `state` is not needed.
- Potentially, 1st is more performant, no life cycle hooks, but non-practical.
- 1st is easy to read
- 2nd is easy to refactor

</Hidden>

<Navigation {...props} />

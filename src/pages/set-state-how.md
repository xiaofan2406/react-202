import Navigation from '../components/Navigation';
import Spacer from '../components/Spacer';
import Hidden from '../components/Hidden';

# How to setState

#### If the new state is based on previous state, always use the function for describing state change.

```jsx
this.setState(prevState => nextState);
```

<Spacer />

#### Use cooler syntax

```jsx
this.setState(prevState => ({
  array: [...prevState.array, newValue],
}));
```

<Spacer />

```jsx
this.setState(prevState => ({
  array: prevState.array.filter(predicate);
}));
```

<Spacer />

```jsx
this.setState(prevState => ({
  obj: {
    ...prevState.obj,
    [keyToUpdateOrAdd]: newValue,
  },
}));
```

<Spacer />

```jsx
this.setState(prevState => ({
  obj: {
    ...prevState.obj,
    level1: {
      ...prevState.obj.level1,
      [keyToUpdateOrAddInLevel1]: newValue,
    },
  },
}));
```

<Spacer />

```jsx
this.setState(prevState => {
  const { keyToOmit, ...rest } = prevState.obj;
  return {
    obj: rest,
  };
});
```

<Spacer />

```jsx
this.setState(prevState => {
  return null;
});
```

<Spacer />

<Hidden>

- Avoid `_.remove`, `Array.splice` etc, the methods that mutates the original object/array.

</Hidden>

<Navigation {...props} />

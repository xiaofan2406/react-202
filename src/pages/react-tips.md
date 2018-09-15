import Navigation from '../components/Navigation';
import Spacer from '../components/Spacer';
import Hidden from '../components/Hidden';

# Tips

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

<Hidden>

- Avoid `_.remove`, `Array.splice` etc, the methods that mutates the original object/array.

</Hidden>

<Navigation {...props} />

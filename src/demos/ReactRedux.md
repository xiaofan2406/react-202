import SmartCode from '../components/SmartCode';
import Hidden from '../components/Hidden';

<SmartCode konsole noInline stateTree>

```jsx
const getProduct = (state, id) => state.products[id];

const mapState = (state, props) => ({
  product: getProduct(state, props.id),
});

const ConnectedProduct = connect(mapState)(Product);

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: 'hello' };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prev => ({ text: prev.text + ' world' }));
  }

  addCCCC() {
    dispatch({
      type: 'add',
      product: { id: 'cccc', name: 'Product CCCC', cost: 300 },
    });
  }

  removeCCC() {
    dispatch({ type: 'remove', id: 'cccc' });
  }

  render() {
    konsole.log('[Demo]: render');
    return (
      <div>
        <button onClick={this.handleClick}>Click</button>
        <button onClick={this.addCCCC}>Add CCCC</button>
        <button onClick={this.removeCCC}>Remove CCCC</button>
        <ConnectedProduct id="aaaa" />
      </div>
    );
  }
}

render(<Demo />);
```

</SmartCode>

<Hidden>

```js
const getProduct = (state, id) => ({
  ...state.products[id],
  isExpensive: state.products[id].cost > 200,
});
```

```js
const getProduct = createSelector(
  (state, id) => state.products[id],
  product => ({
    ...product,
    isExpensive: product.cost > 200,
  })
);
```

```js
const makeGetProduct = id =>
  createSelector(
    state => state.products[id],
    product => ({
      ...product,
      isExpensive: product.cost > 200,
    })
  );

const mapState = (__, { id }) => {
  const getProduct = makeGetProduct(id);
  return (state, props) => ({
    product: getProduct(state, props.id),
  });
};
```

- by default `connect` makes the wrapped component `pure`.
- if the selector always returns a new reference, its gonna re-render on every state change from redux store. technically not `every`, but very inefficient
- Use `reselect`, or any memoize solution.
- function return a `mapState` for shared selector.

</Hidden>

import SmartCode from '../components/SmartCode';
import Hidden from '../components/Hidden';

<SmartCode konsole noInline stateTree>

```jsx
const getProduct = state => state.products.aaaa;

const mapState = state => ({
  product: getProduct(state),
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
        <ConnectedProduct />
      </div>
    );
  }
}

render(<Demo />);
```

</SmartCode>

<Hidden>

```js
const getProduct = state => ({
  ...state.products.aaaa,
  isExpensive: state.products.aaaa.cost > 200,
});
```

```js
const getProduct = createSelector(
  state => state.products.aaaa,
  product => ({
    ...state.products.aaaa,
    isExpensive: state.products.aaaa.cost > 200,
  })
);
```

</Hidden>

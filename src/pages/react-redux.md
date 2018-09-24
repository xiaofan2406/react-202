import Navigation from '../components/Navigation';
import Hidden from '../components/Hidden';
import Spacer from '../components/Spacer';
import DemoDialog, { ReactRedux } from '../demos';

# React with Redux

```jsx
const Product = ({ product, id }) => {
  konsole.log('[Product]: render');
  return (
    <div>
      <span>{id}: </span>
      {product.name} costs {product.cost}
      {product.isExpensive ? <div>Expensive!</div> : null}
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
};

const mapState = (state, props) => ({
  product: state.products[props.id],
});

export default connect(mapState)(Product);
```

<Spacer />

<DemoDialog>
  <ReactRedux />
</DemoDialog>

<Hidden>

- official redux docs.
- Same with react `state`, don't mutate, return new copy.
- selector functions is a good abstraction help organize redux code.

</Hidden>

<Navigation {...props} />

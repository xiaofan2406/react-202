import Navigation from '../components/Navigation';
import Hidden from '../components/Hidden';
import Spacer from '../components/Spacer';
import DemoDialog, { ReactRedux } from '../demos';

# React with Redux

```jsx
const Product = ({ product }) => {
  konsole.log('[Product]: render');
  return (
    <div>
      {product.name} costs {product.cost}
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
};

const mapState = state => ({ product: state.products.aaaa });

export default connect(mapState)(Product);
```

<Spacer />

<DemoDialog>
  <ReactRedux />
</DemoDialog>

<Hidden>

- official redux docs.
- Same with react `state`, don't mutate, return new copy.
- by default `connect` makes the wrapped component `pure`.

- selector functions is a good abstraction help organize redux code.
- it might troll you.
- `reselect` to the rescue.

</Hidden>

<Navigation {...props} />

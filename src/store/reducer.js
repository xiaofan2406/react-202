import { combineReducers } from 'redux';

const defaultProducts = {
  aaaa: {
    id: 'aaaa',
    name: 'Product AAAA',
    cost: 400,
  },
  bbbb: {
    id: 'bbbb',
    name: 'Product BBBB',
    cost: 200,
  },
};

const products = (state = defaultProducts, action) => {
  switch (action.type) {
    case 'add':
      return {
        ...state,
        [action.product.id]: action.product,
      };
    case 'remove':
      return Object.keys(state)
        .filter(id => id !== action.id)
        .reduce(
          (reduced, next) => ({
            ...reduced,
            [next]: state[next],
          }),
          {}
        );
    default:
      return state;
  }
};

export default combineReducers({
  products,
});

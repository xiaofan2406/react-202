import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import reducer from './reducer';

const store = createStore(
  reducer,
  {},
  compose(
    applyMiddleware(reduxThunk),
    typeof window === 'object' &&
      typeof window.devToolsExtension !== 'undefined'
      ? window.devToolsExtension()
      : f => f
  )
);

export const { dispatch } = store;

export default store;

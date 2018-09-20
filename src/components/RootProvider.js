import React from 'react';
import { Provider } from 'react-redux';
import KonsoleProvider from './KonsoleProvider';

import store from '../store';

// eslint-disable-next-line react/display-name,react/prop-types
export default ({ element }) => (
  <Provider store={store}>
    <KonsoleProvider>{element}</KonsoleProvider>
  </Provider>
);
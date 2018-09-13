import React from 'react';
import PropTypes from 'prop-types';

function Hidden({ children }) {
  return <div style={{ display: 'none' }}>{children}</div>;
}

Hidden.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Hidden;

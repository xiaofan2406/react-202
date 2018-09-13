import React from 'react';
import PropTypes from 'prop-types';
import CodeDisplay from './CodeDisplay';

function PreComponent({ children }) {
  const flags = children.props.props
    ? children.props.props.className.split(',')
    : [];

  return <CodeDisplay code={children.props.children} flags={flags} />;
}

PreComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PreComponent;

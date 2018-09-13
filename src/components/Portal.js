import React from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

class Portal extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  container = document.createElement('div');

  componentDidMount() {
    document.body.appendChild(this.container);
  }

  componentWillUnmount() {
    document.body.removeChild(this.container);
  }

  render() {
    const { children } = this.props;
    return createPortal(children, this.container);
  }
}

export default Portal;

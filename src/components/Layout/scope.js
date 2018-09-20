/* eslint-disable react/no-multi-comp */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { dispatch } from '../../store';

export class NormalChild extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    didUpdate: PropTypes.func.isRequired,
  };

  componentDidUpdate() {
    this.props.didUpdate();
  }

  render() {
    const { text } = this.props;
    return <div>{text}</div>;
  }
}

export class PureChild extends React.PureComponent {
  static propTypes = {
    text: PropTypes.string.isRequired,
    didUpdate: PropTypes.func.isRequired,
  };

  componentDidUpdate() {
    this.props.didUpdate();
  }

  render() {
    const { text } = this.props;
    return <div>{text}</div>;
  }
}

export const Product = ({ product }) => {
  window.konsole.log('[Product]: render');
  return (
    <div>
      {product.name} costs {product.cost}
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
};

export { dispatch, connect, createSelector };

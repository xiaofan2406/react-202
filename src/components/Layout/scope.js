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

export const Product = ({ product, id }) => {
  window.konsole.log('[Product]: render');
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

export { dispatch, connect, createSelector };

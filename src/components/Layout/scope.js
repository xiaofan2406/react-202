/* eslint-disable react/no-multi-comp */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Normal extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
  };

  componentDidUpdate() {
    this.props.dispatch({
      type: 'konsole.log',
      message: '[NormalChild]: render',
    });
  }

  render() {
    const { text } = this.props;
    return <div>{text}</div>;
  }
}

class Pure extends React.PureComponent {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
  };

  componentDidUpdate() {
    this.props.dispatch({
      type: 'konsole.log',
      message: '[PureChild]: render',
    });
  }

  render() {
    const { text } = this.props;
    return <div>{text}</div>;
  }
}

export const NormalChild = connect(
  null,
  null,
  null,
  { pure: false }
)(Normal);
export const PureChild = connect(
  null,
  null,
  null,
  { pure: false }
)(Pure);

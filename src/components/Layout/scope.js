/* eslint-disable react/no-multi-comp */
import React from 'react';
import PropTypes from 'prop-types';
import { konsole } from '../../store';

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

export { konsole };

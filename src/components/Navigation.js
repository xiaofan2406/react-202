import React from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';
import { css } from 'react-emotion';
import { cssButton } from '../styles';
import { orders } from '../utils';

class Navigation extends React.Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
  };

  getCurrentOrder = () =>
    orders.findIndex(pathname =>
      new RegExp(pathname).test(this.props.location.pathname)
    );

  handleNext = () => {
    const currentOrder = this.getCurrentOrder();

    if (currentOrder !== orders.length - 1) {
      navigate(`${orders[currentOrder + 1]}`);
    }
  };

  handlePrev = () => {
    const currentOrder = this.getCurrentOrder();

    if (currentOrder !== 0) {
      navigate(`${orders[currentOrder - 1]}`);
    }
  };

  render() {
    const currentOrder = this.getCurrentOrder();
    return (
      <>
        {currentOrder === 0 ? (
          <span />
        ) : (
          <button
            onClick={this.handlePrev}
            type="button"
            className={css`
              ${cssButton};
              position: fixed;
              bottom: 24px;
              left: 48px;
              z-index: 0;
            `}
          >
            Previous
          </button>
        )}
        {currentOrder === orders.length - 1 ? (
          <span />
        ) : (
          <button
            onClick={this.handleNext}
            type="button"
            className={css`
              ${cssButton};
              position: fixed;
              bottom: 24px;
              right: 48px;
              z-index: 0;
            `}
          >
            Next
          </button>
        )}
      </>
    );
  }
}

export default Navigation;

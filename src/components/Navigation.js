import React from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';
import { css } from 'react-emotion';
import { textColor, cssBorder, themeColor } from '../styles';
import { orders } from '../utils';

const cssButton = css`
  cursor: pointer;
  padding: 12px 24px;
  color: ${textColor};
  background-color: transparent;
  ${cssBorder};

  &:hover {
    color: ${themeColor};
    border-color: ${themeColor};
  }
`;

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
      <div
        className={css`
          width: 100%;
          position: fixed;
          bottom: 0;
          left: 0;
          z-index: 1;
          padding: 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        `}
      >
        {currentOrder === 0 ? (
          <span />
        ) : (
          <button onClick={this.handlePrev} type="button" className={cssButton}>
            prev
          </button>
        )}
        {currentOrder === orders.length - 1 ? (
          <span />
        ) : (
          <button onClick={this.handleNext} type="button" className={cssButton}>
            Next
          </button>
        )}
      </div>
    );
  }
}

export default Navigation;

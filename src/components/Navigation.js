import React from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';
import { css } from 'react-emotion';
import { textColor, cssBorder, themeColor } from '../styles';

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

const orders = ['/component-types', '/pure-component', '/end'];

class Navigation extends React.Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
  };

  handleClick = () => {
    const { location } = this.props;
    const currentOrder = orders.indexOf(location.pathname);
    navigate(`${orders[currentOrder + 1]}`);
  };

  render() {
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
        <button type="button" className={cssButton}>
          prev
        </button>
        <button onClick={this.handleClick} type="button" className={cssButton}>
          Next
        </button>
      </div>
    );
  }
}

export default Navigation;

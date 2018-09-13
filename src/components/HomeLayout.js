import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

function HomeLayout({ children }) {
  return (
    <div
      className={css`
        width: 100%;
        height: 100%;
        position: fixed;
        display: flex;
        font-size: 64px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      `}
    >
      {children.props.children}
    </div>
  );
}

HomeLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HomeLayout;

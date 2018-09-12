import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'react-emotion';

function Spacer({ space }) {
  return (
    <div
      className={css`
        height: ${space}px;
      `}
    />
  );
}

Spacer.propTypes = {
  space: PropTypes.number,
};

Spacer.defaultProps = {
  space: 64,
};

export default Spacer;

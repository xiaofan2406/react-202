import React from 'react';
import { css } from 'react-emotion';
import { navigate } from 'gatsby';
import { themeColor } from '../styles';
import { orders } from '../utils';

function StartButton() {
  return (
    <button
      onClick={() => navigate(orders[0])}
      type="button"
      className={css`
        cursor: pointer;
        padding: 12px 24px;
        font-size: 24px;
        background-color: ${themeColor};
        color: #fff;
        border: 0;
      `}
    >
      Start
    </button>
  );
}

export default StartButton;

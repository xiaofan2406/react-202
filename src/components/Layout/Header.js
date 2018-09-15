import React from 'react';
import { Link } from 'gatsby';
import { css } from 'react-emotion';
import {
  headerHeight,
  cssPageWidth,
  textColor,
  themeColor,
} from '../../styles';

const cssExternalLink = css`
  text-decoration: none;
  color: ${textColor};
  &:hover {
    color: ${themeColor};
  }
`;

function Header() {
  return (
    <header
      className={css`
        ${cssPageWidth};
        position: fixed;
        top: 0;
        z-index: 1;
        height: ${headerHeight}px;
        width: 100%;
        background-color: rgba(255, 255, 255, 0.975);
        box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.15);
        padding: 24px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      `}
    >
      <span
        className={css`
          margin: 0;
          font-size: 20px;
          font-family: cursive;
        `}
      >
        <Link to="/" style={{ textDecoration: 'none', color: themeColor }}>
          f(data) -&#62; view
        </Link>
      </span>
      <a
        href="https://github.com/xiaofan2406/react-202"
        target="_blank"
        rel="noopener noreferrer"
        className={cssExternalLink}
      >
        Github
      </a>
    </header>
  );
}

export default Header;

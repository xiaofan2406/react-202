import { css, injectGlobal } from 'react-emotion';

export const themeColor = '#663399';
export const textColor = 'rgba(0, 0, 0, 0.88)';

export const cssPageWidth = css`
  min-width: 480px;
`;

export const headerHeight = 72;

export const cssBorder = css`
  border: 1px solid #e8e8e8;
`;

export const cssHoverableBox = css`
  ${cssBorder};

  &:hover {
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.15);
    transition: box-shadow 0.3s ease-in-out;
  }
`;

export const cssCode = css`
  font-family: monospace;
  font-size: 16px;
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.8);
`;

export const cssButton = css`
  cursor: pointer;
  outline: none;
  padding: 12px 24px;
  color: ${textColor};
  background-color: transparent;
  ${cssBorder};

  &:hover {
    color: ${themeColor};
    border-color: ${themeColor};
  }
`;

// eslint-disable-next-line
injectGlobal`
  html {
    overflow-y: scroll;
  }

  body {
    color: ${textColor};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  pre,
  code {
    margin: 0;
    background-color: #f5f7f9;
  }

  code {
    padding: 2px 4px;
  }

  h1 {
    margin-top: 0;
    position: fixed;
    top: 24px;
    font-weight: normal;
    font-size: 26px;
    z-index: 2;
  }
`;

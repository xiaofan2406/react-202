import React from 'react';
import PropTypes from 'prop-types';
import { css, cx } from 'react-emotion';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import * as scope from './scope';
import { cssHoverableBox, cssCode, cssBorder } from '../../styles';

const cssLive = css`
  margin-bottom: 24px;
  ${cssHoverableBox};
`;

const cssInline = css`
  display: inline-block;
  margin-right: 12px;
`;

const cssEditable = css`
  ${cssCode};
  outline: 0;
  flex: 1;
  border-top: none;
  border-left: none;
  border-bottom: none;
`;

const cssEditor = css`
  ${cssCode};
  padding: 12px;
  ${cssBorder};
  border-radius: 2px;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.9);
`;

const cssPreviewSection = css`
  flex: 1;
  padding: 12px;
  display: flex;
  flex-direction: column;
`;

const cssError = css`
  ${cssCode};
  color: #ff1717;
  font-size: 14px;
  padding: 12px;
`;

function CodeDisplay({ code, editable, inline, addon, noInline }) {
  return (
    <LiveProvider
      code={code}
      scope={scope}
      mountStylesheet={false}
      noInline={noInline}
      className={cx({ [cssLive]: editable, [cssInline]: inline })}
    >
      <div
        className={css`
          display: flex;
          flex-wrap: wrap;
        `}
      >
        <LiveEditor
          contentEditable={editable}
          className={cx(cssEditor, { [cssEditable]: editable })}
        />
        {editable ? (
          <div className={cssPreviewSection}>
            <LivePreview />
            {addon}
          </div>
        ) : null}
      </div>
      {editable ? <LiveError className={cssError} /> : null}
    </LiveProvider>
  );
}

CodeDisplay.propTypes = {
  code: PropTypes.string.isRequired,
  editable: PropTypes.bool,
  inline: PropTypes.bool,
  noInline: PropTypes.bool,
  addon: PropTypes.node,
};

CodeDisplay.defaultProps = {
  editable: false,
  inline: false,
  noInline: false,
  addon: null,
};

export default CodeDisplay;

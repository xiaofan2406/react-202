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
  margin-right: 48px;
`;

const cssEditor = css`
  ${cssCode};
  outline: 0;
  flex: 1;
  margin: 0;
  overflow: auto;
  padding: 12px;
  border-radius: 2px;
`;

const cssNonEditable = css`
  ${cssCode};
  ${cssBorder};
  padding: 12px;
  border-radius: 2px;
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
  font-size: 12px;
  padding: 12px;
`;

function CodeDisplay({ code, editable, inline, addon }) {
  return (
    <LiveProvider
      code={code}
      scope={scope}
      mountStylesheet={false}
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
          className={editable ? cssEditor : cssNonEditable}
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
  addon: PropTypes.node,
};

CodeDisplay.defaultProps = {
  editable: false,
  inline: false,
  addon: null,
};

export default CodeDisplay;

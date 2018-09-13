import React from 'react';
import PropTypes from 'prop-types';
import { css, cx } from 'react-emotion';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import * as scope from './scope';
import { cssHoverableBox, cssCode, cssBorder } from '../styles';
import Konsole from './Konsole';

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

function PreComponent({ code, flags }) {
  const showEditable = flags.includes('editable');
  const inlineNonEditable = !showEditable && flags.includes('inline');
  const showKonsole = flags.includes('konsole');

  return (
    <LiveProvider
      code={code}
      scope={scope}
      mountStylesheet={false}
      className={cx(
        showEditable ? cssLive : '',
        inlineNonEditable ? cssInline : ''
      )}
    >
      <div
        className={css`
          display: flex;
          flex-wrap: wrap;
        `}
      >
        <LiveEditor
          contentEditable={showEditable}
          className={showEditable ? cssEditor : cssNonEditable}
        />
        {showEditable ? (
          <div className={cssPreviewSection}>
            <LivePreview />
            {showKonsole ? <Konsole /> : null}
          </div>
        ) : null}
      </div>
      {showEditable ? <LiveError className={cssError} /> : null}
    </LiveProvider>
  );
}

PreComponent.propTypes = {
  code: PropTypes.string.isRequired,
  flags: PropTypes.array.isRequired,
};

export default PreComponent;

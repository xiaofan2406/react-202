import React from 'react';
import PropTypes from 'prop-types';
import { css, cx } from 'react-emotion';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { cssHoverableBox, cssCode, cssBorder } from '../styles';

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

const cssPreview = css`
  flex: 1;
  padding: 12px;
`;

const cssError = css`
  ${cssCode};
  color: #ff1717;
  font-size: 12px;
  padding: 12px;
`;

const Child = () => {
  console.log('render');
  return <span>child</span>;
};

function PreComponent({ children }) {
  const flags = children.props.props
    ? children.props.props.className.split(',')
    : [];

  const showEditable = flags.includes('editable');
  const inlineNonEditable = !showEditable && flags.includes('inline');

  return (
    <LiveProvider
      code={children.props.children}
      scope={{ Child }}
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
        {showEditable ? <LivePreview className={cssPreview} /> : null}
      </div>
      {showEditable ? <LiveError className={cssError} /> : null}
    </LiveProvider>
  );
}

PreComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PreComponent;

import React from 'react';
import PropTypes from 'prop-types';
import Konsole from './Konsole';
import StateTree from './StateTree';

function SmartCode({ children, still, inline, konsole, noInline, stateTree }) {
  const child = React.Children.only(children);
  const addon = (
    <>
      {stateTree ? <StateTree /> : null}
      {konsole ? <Konsole /> : null}
    </>
  );

  return React.cloneElement(child, {
    children: {
      ...child.props.children,
      props: {
        ...child.props.children.props,
        editable: !still,
        inline, // inline display
        noInline, // react-live noInline
        addon,
      },
    },
  });
}

SmartCode.propTypes = {
  children: PropTypes.node.isRequired,
  still: PropTypes.bool,
  inline: PropTypes.bool,
  noInline: PropTypes.bool,
  konsole: PropTypes.bool,
  stateTree: PropTypes.bool,
};

SmartCode.defaultProps = {
  still: false,
  inline: false,
  noInline: false,
  konsole: false,
  stateTree: false,
};

export default SmartCode;

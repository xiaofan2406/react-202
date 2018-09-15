import React from 'react';
import PropTypes from 'prop-types';
import Konsole from './Konsole';

function SmartCode({ children, still, inline, konsole }) {
  const child = React.Children.only(children);

  return React.cloneElement(child, {
    children: {
      ...child.props.children,
      props: {
        ...child.props.children.props,
        editable: !still,
        inline,
        addon: konsole ? <Konsole /> : null,
      },
    },
  });
}

SmartCode.propTypes = {
  children: PropTypes.node.isRequired,
  still: PropTypes.bool,
  inline: PropTypes.bool,
  konsole: PropTypes.bool,
};

SmartCode.defaultProps = {
  still: false,
  inline: false,
  konsole: false,
};

export default SmartCode;

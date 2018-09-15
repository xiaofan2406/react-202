import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'react-emotion';
import Portal from './Portal';
import { cssButton } from '../styles';

class DemoDialog extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  state = {
    show: false,
  };

  showDialog = () => {
    this.setState({ show: true });
  };

  closeDialog = () => {
    this.setState({ show: false });
  };

  render() {
    const { children } = this.props;
    const { show } = this.state;
    return (
      <>
        <button type="button" onClick={this.showDialog} className={cssButton}>
          See Demo
        </button>
        {show ? (
          <Portal>
            <div
              className={css`
                position: fixed;
                top: 0;
                left: 0;
                z-index: 20;
                width: 100%;
                height: 100%;
                background-color: rgba(255, 255, 255, 0.9);
                padding: 96px;
              `}
            >
              {children}
              <button
                type="button"
                className={css`
                  ${cssButton};
                  position: absolute;
                  top: 24px;
                  right: 24px;
                `}
                onClick={this.closeDialog}
              >
                Close
              </button>
            </div>
          </Portal>
        ) : null}
      </>
    );
  }
}

export default DemoDialog;

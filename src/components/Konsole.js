import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { css } from 'react-emotion';
import { cssButton, cssBorder } from '../styles';

class Konsole extends React.Component {
  static propTypes = {
    logs: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
  };

  clearConsole = () => {
    this.props.dispatch({ type: 'konsole.clear' });
  };

  render() {
    const { logs } = this.props;
    return (
      <div
        className={css`
          margin-top: 24px;
          flex: 1;
          position: relative;
          font-family: monospace;
          font-size: 13px;
          line-height: 1.4;
          background-color: rgba(0, 0, 0, 0.02);
          ${cssBorder};
        `}
      >
        {logs.map(({ message, timestamp }) => (
          <div key={timestamp}>
            {new Date(timestamp).toTimeString().substring(0, 8)}: {message}
          </div>
        ))}
        <button
          type="button"
          onClick={this.clearConsole}
          className={css`
            position: absolute;
            bottom: 0;
            ${cssButton};
            padding: 6px;
            font-size: 12px;
          `}
        >
          Clear
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  logs: state.konsole,
});

export default connect(mapStateToProps)(Konsole);

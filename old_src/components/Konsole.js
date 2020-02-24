import React from 'react';
import { css } from 'react-emotion';
import { KonsoleConsumer } from './KonsoleProvider';
import { cssButton, cssBorder } from '../styles';

function Konsole() {
  return (
    <KonsoleConsumer>
      {logs => (
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
            onClick={window.konsole.clear}
            className={css`
              position: absolute;
              top: 0;
              right: 0;
              ${cssButton};
              padding: 6px;
              font-size: 12px;
            `}
          >
            Clear
          </button>
        </div>
      )}
    </KonsoleConsumer>
  );
}

export default Konsole;

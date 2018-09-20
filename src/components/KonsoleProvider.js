import React from 'react';
import PropTypes from 'prop-types';

const { Provider, Consumer } = React.createContext();

class KonsoleProvider extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  state = {
    logs: [],
  };

  log = message => {
    this.setState(prevState => ({
      logs: [
        ...prevState.logs,
        {
          message,
          timestamp: +new Date(),
        },
      ],
    }));
  };

  clear = () => {
    this.setState({ logs: [] });
  };

  render() {
    const { children } = this.props;
    window.konsole = { log: this.log, clear: this.clear };
    return <Provider value={this.state.logs}>{children}</Provider>;
  }
}

export default KonsoleProvider;

export const KonsoleConsumer = Consumer;

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function StateTree({ state }) {
  return <pre>{JSON.stringify(state, ' ', 2)}</pre>;
}

StateTree.propTypes = {
  state: PropTypes.object.isRequired,
};

const mapState = state => ({ state });

export default connect(mapState)(StateTree);

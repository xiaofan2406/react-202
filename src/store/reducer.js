import { combineReducers } from 'redux';

const konsole = (state = [], action) => {
  switch (action.type) {
    case 'konsole.log':
      return [...state, action.message];
    case 'konsole.clear':
      return [];
    default:
      return state;
  }
};

export default combineReducers({
  konsole,
});

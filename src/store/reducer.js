import { combineReducers } from 'redux';

const konsole = (state = [], action) => {
  switch (action.type) {
    case 'konsole.log':
      return [
        ...state,
        {
          message: action.message,
          timestamp: +new Date(),
        },
      ];
    case 'konsole.clear':
      return [];
    default:
      return state;
  }
};

export default combineReducers({
  konsole,
});

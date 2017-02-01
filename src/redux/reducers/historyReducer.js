import {LOG_LAST_ACTION } from '../actions';

const DEFAULT_STATE = {
};

const logLastAction = (state, action) => {
  return Object.assign({}, state, {lastAction: action.action});
};


const rootReducer = (state = DEFAULT_STATE, action) => {
  if (action){
    switch (action.type) {
      case LOG_LAST_ACTION:
        return logLastAction(state, action);
      default:
        return state;
    }
  }

};

export default rootReducer;

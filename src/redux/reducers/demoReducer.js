import { SET_PROPERTY, SET_SIGNATURE } from '../actions';
import broadcastAction from '../broadcast-action';

const DEFAULT_STATE = {
};

const setSignature = (state) => {
  const signature = String(Math.random());
  return Object.assign({}, state, {signature: signature});
};


const setProperty = (state, action) => {
  const {propertyName, propertyValue} = action;
  let tempObject = {};
  tempObject[propertyName] = propertyValue;
  if (!action.signature){
    broadcastAction(action, state.signature);
  }
  return Object.assign({}, state, tempObject);
};


const rootReducer = (state = DEFAULT_STATE, action) => {
  if (action){
    switch (action.type) {
      case SET_PROPERTY:
        return setProperty(state, action);
      case SET_SIGNATURE:
        return setSignature(state);
      default:
        return state;
    }
  }

};

export default rootReducer;

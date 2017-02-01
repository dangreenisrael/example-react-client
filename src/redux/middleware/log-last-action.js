import {logLastAction} from '../actionCreators';


const logger = store => next => action => {
  if (action.type !== "LOG_LAST_ACTION"){
    store.dispatch(logLastAction( action));
  }
  return next(action)
};

export default logger;
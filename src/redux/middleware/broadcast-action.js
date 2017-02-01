import socket from './../../socket';

const broadcast = store => next => action => {
  if (action.type !== "LOG_LAST_ACTION"){
    socket.emit('action', action);
  }
  return next(action)
};

export default broadcast;
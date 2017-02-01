import socket from '../socket';
import _ from 'lodash';
export default (action, signature)=>{
  if (action.type !== "LOG_LAST_ACTION"){
    let actionToBroadcast = _.clone(action);
    actionToBroadcast.signature = signature;
    socket.emit('action', actionToBroadcast);
  }
};


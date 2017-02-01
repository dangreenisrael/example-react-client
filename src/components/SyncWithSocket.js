import React, {Component} from 'react';
import {connect} from 'react-redux';
import socket from '../socket';
import {setSignature} from '../redux/actionCreators';


class SyncWithSocket extends Component {
  constructor(props) {
    super(props);
    this.props.dispatch(setSignature());
    socket.on('action', (action)=>{
      const doUpdate = this.props.signature !== action.signature;
      if (doUpdate === true){
        props.dispatch(action);
        console.log('triggered')
      }
    });
  }
  render() {
    return (
        <div>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lastAction: state.history.lastAction,
    signature: state.demo.signature
  };
};

export default connect(mapStateToProps)(SyncWithSocket);

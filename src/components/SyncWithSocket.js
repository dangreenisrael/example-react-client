import React, {Component} from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import socket from '../socket';

class SyncWithSocket extends Component {
  constructor(props) {
    super(props);
    socket.on('action', (action)=>{
      if (!_.isEqual(this.props.lastAction, action)){
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
    lastAction: state.history.lastAction
  };
};

export default connect(mapStateToProps)(SyncWithSocket);

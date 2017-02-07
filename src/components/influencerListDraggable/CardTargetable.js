import React, {Component } from 'react';
import { DropTarget } from 'react-dnd';

const dustbinTarget = {
  drop(props, monitor) {
    props.onDrop(monitor.getItem());
  },
};

@DropTarget(props => "application", dustbinTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver()
}))

export default class Dustbin extends Component {
  render() {
    const { isOver, connectDropTarget, children } = this.props;
    const bgColor = isOver ?  "rgba(70, 76, 239, 0.4)": "";

  return connectDropTarget(
    <div className='pt-card pt-elevation-1' style={{margin: "10px", backgroundColor: bgColor}}>
      {children}
    </div>
    );
  }
}

import React, { Component } from 'react';
import { DragSource, DropTarget } from 'react-dnd';

const cardSource = {
  beginDrag(props) {
    props.beginDrag(props.id);
    return {
      id: props.id,
      index: props.index
    };
  },
  endDrag(props){
    props.endDrag();
  }
};

const cardTarget = {
  hover(props, monitor) {
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;
    // Don't replace items with themselves
    if (dragIndex === hoverIndex) {
      return;
    }
    // Time to actually perform the action
    props.reorderHeadings(dragIndex, hoverIndex);
    // Note: we're mutating the monitor item here!
    // Generally it's better to avoid mutations,
    // but it's good here for the sake of performance
    // to avoid expensive index searches.
    monitor.getItem().index = hoverIndex;
  },
};

@DropTarget('tableHeading', cardTarget, (connect, monitor)=> ({
  connectDropTarget: connect.dropTarget()
}))
@DragSource('tableHeading', cardSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
  connectDragPreview: connect.dragPreview(),
}))
export default class Card extends Component {
  render() {
    const blankGif = new Image();
    blankGif.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
    this.props.connectDragPreview(blankGif);
    const { text, activeColumn, connectDragSource, connectDropTarget, activeStyle } = this.props;
    const style = (text === activeColumn) ? activeStyle: {cursor:"move"};
    return connectDragSource(connectDropTarget(
        <td style={style}>
          {text}
        </td>,
    ), {dropEffect: "copy"});
  }
}
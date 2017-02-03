import React, {Component} from 'react';
import {DragSource} from 'react-dnd';
const boxSource = {
  beginDrag(props) {
    return {
      id: props.id,
    };
  },
};
@DragSource(props => "application", boxSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
}))

class DraggableRow extends Component {
  render() {
    const {data, visible, connectDragSource} = this.props;
    return connectDragSource(
        <tr>
          {visible.map((key, i)=>{
            return <td key={i}>
              {data[key]}
              </td>
          })}
        </tr>
    );
  }
}

export default DraggableRow;

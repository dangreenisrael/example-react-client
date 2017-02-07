import React, {Component} from 'react';
import {DragSource} from 'react-dnd';
import RowCheckboxContainer from './RowCheckboxContainer';
import Tag from '../Tag'

const boxSource = {
  beginDrag(props) {
    return { id: props.id };
  },
};

@DragSource(props => "application", boxSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  connectDragPreview: connect.dragPreview(),
  isDragging: monitor.isDragging(),
}))
export default class DraggableRow extends Component {
  render() {
    this.props.connectDragPreview(this.props.dragPreview);
    const {connectDragSource, data, headings, id, selected, removeTag} = this.props;
    const style = selected ? {backgroundColor: "rgba(23, 42, 251, 0.34)" } : {};
    const cellData = headings.map(key =>{
      return data[key]
    });
    return connectDragSource(
        <tr style={style}>
          <td>
            <RowCheckboxContainer rowId={id}/>
          </td>
          {cellData.map((cell, i)=>{
            return <td key={`data-${i}`}>
              {cell}
            </td>
          })}
          <td>
            {data.tags.map((tag, i)=>{
              return <Tag key={`tags-${i}`} title={tag} remove={removeTag}/>
            })}
          </td>
        </tr>
    );
  }
}

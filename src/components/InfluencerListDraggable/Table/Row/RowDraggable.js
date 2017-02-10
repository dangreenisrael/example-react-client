import React, {Component} from 'react';
import {DragSource} from 'react-dnd';
import RowCheckboxContainer from './RowCheckboxContainer';
import Tag from '../../../Tag'

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
    const {activeStyle, connectDragSource, activeColumn, data, headings, id, selected, removeTag} = this.props;
    const style = selected ? activeStyle : {};
    return connectDragSource(
        <tr style={style}>
          <td>
            <RowCheckboxContainer rowId={id}/>
          </td>
          {headings.map((heading, i)=>{
            const propName = heading.propertyName;
            const style = (propName === activeColumn) ? activeStyle: {};
            return <td style={style} key={`data-${i}`}>
              {data[propName]}
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

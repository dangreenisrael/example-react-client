import React, {Component} from 'react';
import {DragSource} from 'react-dnd';
import CheckboxRowContainer from './CheckboxRowContainer';
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
  constructor(props){
    super(props);
    this.toggleChecked = this.toggleChecked.bind(this);
    this.state = {checked: false};
  }
  toggleChecked(status){
    this.setState({checked: status});
  }
  render() {
    this.props.connectDragPreview(this.props.dragPreview);
    const {connectDragSource, data, headings, id} = this.props;
    const style = this.state.checked ? {backgroundColor: "rgba(23, 42, 251, 0.34)" } : {};
    const cellData = headings.map(key =>{
      return data[key]
    });
    return connectDragSource(
        <tr style={style}>
          <td>
            <CheckboxRowContainer rowId={id} toggleChecked={this.toggleChecked}/>
          </td>
          {cellData.map((cell, i)=>{
            return <td key={i}>
              {cell}
            </td>
          })}
        </tr>
    );
  }
}

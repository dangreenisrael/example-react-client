import React, {Component} from 'react';
import {DragSource} from 'react-dnd';
import Checkbox from '../Checkbox';
import { createDragPreview } from 'react-dnd-text-dragpreview'

const boxSource = {
  beginDrag(props) {
    return { id: props.id };
  },
};

const dragPreviewStyle = {
  backgroundColor: 'rgb(68, 67, 67)',
  borderColor: '#F96816',
  color: 'white',
  fontSize: 15,
  paddingTop: 4,
  paddingRight: 7,
  paddingBottom: 6,
  paddingLeft: 7
};

function formatDragMessage(numRows) {
  const noun = numRows === 1 ? 'row' : 'rows';
  return `Moving ${numRows} ${noun}`
}

@DragSource(props => "application", boxSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  connectDragPreview: connect.dragPreview(),
  isDragging: monitor.isDragging(),
}))
class DraggableRow extends Component {
  constructor(props){
    super(props);
    this.onCheck = this.onCheck.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  dragPreview = createDragPreview(formatDragMessage(2), dragPreviewStyle);
  componentDidMount() {
    this.props.connectDragPreview(this.dragPreview)
  }
  onCheck(checked){
    this.props.onCheck(this.props.id, checked);
  }
  cellData(){
    const {data, headings} = this.props;
    return headings.map(key =>{
      return data[key]
    });
  };
  render() {
    const {connectDragSource, data} = this.props;
    const cellData = this.cellData();
    const style = data.checked ? {backgroundColor: "rgba(23, 42, 251, 0.34)" } : {};
    return connectDragSource(
        <tr style={style}>
          <td>
            <Checkbox onChange={this.onCheck}/>
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

export default DraggableRow;

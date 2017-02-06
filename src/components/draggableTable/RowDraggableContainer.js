import React, {Component} from 'react';
import {connect} from 'react-redux';
import DraggableRow from './RowDraggable';
import { createDragPreview } from 'react-dnd-text-dragpreview'

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


class RowDraggableContainer extends Component {
  constructor(props) {
    super(props);
    this.dragMessage = this.dragMessage.bind(this);
  }
  dragMessage() {
    const numRows = this.props.selection.length;
    const noun = numRows === 1 ? 'row' : 'rows';
    return `Moving ${numRows} ${noun}`
  }
  render() {
    const dragPreview = createDragPreview(
        this.dragMessage(),
        dragPreviewStyle
    );
    const {currentSelection, data, headings, id} = this.props;
    return (
      <DraggableRow
          data={data}
          headings={headings}
          id={id}
          currentSelection={currentSelection}
          dragPreview={dragPreview}
      />
    );
  }
}


const mapStateToProps = (state) => {
  return {
    selection: state.currentSelection.ids
  };
};

export default connect(mapStateToProps)(RowDraggableContainer);

import React, {Component} from 'react'
import {connect} from 'react-redux'
import DraggableRow from './RowDraggable'
import { createDragPreview } from 'react-dnd-text-dragpreview'
import {removeTag} from '../../redux/influencers'

const dragPreviewStyle = {
  backgroundColor: 'rgb(68, 67, 67)',
  borderColor: '#F96816',
  color: 'white',
  fontSize: 20,
  paddingTop: 4,
  paddingRight: 7,
  paddingBottom: 6,
  paddingLeft: 7
};

class RowDraggableContainer extends Component {
  constructor(props) {
    super(props);
    this.dragMessage = this.dragMessage.bind(this);
    this.removeTag = this.removeTag.bind(this);
  }
  dragMessage() {
    const numRows = this.props.selection.length;
    const noun = numRows > 1 ? 'rows' : 'row';
    return `Moving ${numRows||1} ${noun}`;
  }
  removeTag(tag){
    const {id, dispatch} = this.props;
    dispatch(removeTag(id, tag));
  }
  render() {
    const dragPreview = process.env.NODE_ENV === "test"? null : createDragPreview(
        this.dragMessage(),
        dragPreviewStyle
    );
    const {currentSelection, activeStyle, activeColumn, data, headings, id, selection} = this.props;
    const isSelected = (selection.indexOf(id) !== -1);
    return (
      <DraggableRow
          data={data}
          headings={headings}
          id={id}
          currentSelection={currentSelection}
          selected={isSelected}
          removeTag={this.removeTag}
          dragPreview={dragPreview}
          activeStyle={activeStyle}
          activeColumn={activeColumn}
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

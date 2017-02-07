import React, {Component} from 'react';
import {connect} from 'react-redux'
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Table from './Table';
import Cards from './Cards';
import {addTag} from '../../redux/influencers';
import {clearSelection, addToSelection} from '../../redux/currentSelection';

@DragDropContext(HTML5Backend)
class Container extends Component {
  constructor(props) {
    super(props);
    this.handleDrop = this.handleDrop.bind(this);
    this.toggleSelectAll = this.toggleSelectAll.bind(this);
    this.getCheckboxStatus = this.getCheckboxStatus.bind(this);
  }
  render() {
    const headings = ["firstName", "lastName", "userName", "tags"];
    const {tags, influencers} = this.props;
    const checkboxStatus = this.getCheckboxStatus();
    return (
        <div>
          <div style={{float: "left"}}>
            <Cards cards={tags.tags} handleDrop={this.handleDrop}/>
          </div>
          <div style={{float:"right"}}>
            <Table
                headings={headings}
                rowData={influencers}
                onCheck={this.toggleSelectAll}
                checkboxStatus={checkboxStatus}
            />
          </div>
        </div>);
  }
  handleDrop(item, tagName) {
    const checkedRecords = this.props.currentSelection.ids;
    const influencerIds = checkedRecords.length ? checkedRecords : [item.id];
    influencerIds.forEach(influencerId =>{
      this.props.dispatch(addTag(influencerId, tagName));
    });
    this.props.dispatch(clearSelection());
  }
  toggleSelectAll(){
    const allIds = Object.keys(this.props.influencers);
    const selectedIds = this.props.currentSelection.ids;
    if (allIds.length > selectedIds.length){
      this.props.dispatch(addToSelection(allIds));
    } else{
      this.props.dispatch(clearSelection());
    }
  }
  getCheckboxStatus(){
    const selectionCount = this.props.currentSelection.ids.length;
    const influencerCount = Object.keys(this.props.influencers).length;
    if (selectionCount >= influencerCount){
      return true;
    } else if (selectionCount < influencerCount && selectionCount > 0){
      return 'indeterminate'
    }
    return false;
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(Container);

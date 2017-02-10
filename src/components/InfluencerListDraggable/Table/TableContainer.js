import React, {Component} from 'react';
import Table from './Table';
import {connect} from 'react-redux';
import {clearSelection, addToSelection} from '../../../redux/currentSelection';

class TableContainer extends Component {
  constructor(props) {
    super(props);
    this.toggleSelectAll = this.toggleSelectAll.bind(this);
    this.getCheckboxStatus = this.getCheckboxStatus.bind(this);
  }

  render() {
    const headings = ["firstName", "lastName", "userName"];
    const {influencers} = this.props;
    const checkboxStatus = this.getCheckboxStatus();
    return (
        <div>
          <Table
              headings={headings}
              rowData={influencers}
              onCheck={this.toggleSelectAll}
              checkboxStatus={checkboxStatus}
          />
        </div>
    );
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

export default connect(mapStateToProps)(TableContainer);

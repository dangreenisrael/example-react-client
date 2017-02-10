import React, {Component} from 'react';
import {toggleSelectedStatus} from '../../../../redux/currentSelection';
import {connect} from 'react-redux';
import Checkbox from '../../../Checkbox/Checkbox';

class CheckboxContainer extends Component {
  constructor(props) {
    super(props);
    this.onCheck = this.onCheck.bind(this);
  }
  onCheck(status){
    this.props.dispatch(toggleSelectedStatus(this.props.rowId, status));
  }
  render() {
    const {selection,rowId} = this.props;
    let checked = (selection.indexOf(rowId) > -1);
    return (
        <Checkbox onChange={this.onCheck} checked={checked}/>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selection: state.currentSelection.ids
  };
};

export default connect(mapStateToProps)(CheckboxContainer);

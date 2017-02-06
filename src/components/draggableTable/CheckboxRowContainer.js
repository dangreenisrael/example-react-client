import React, {Component} from 'react';
import {toggleSelectedStatus} from '../../redux/currentSelection';
import {connect} from 'react-redux';
import Checkbox from '../Checkbox';

class CheckboxContainer extends Component {
  constructor(props) {
    super(props);
    this.onCheck = this.onCheck.bind(this);
  }
  onCheck(status){
    this.props.dispatch(toggleSelectedStatus(this.props.rowId, status));
    this.props.toggleChecked(status);
  }
  render() {
    return (
        <Checkbox onChange={this.onCheck}/>
    );
  }
}

export default connect()(CheckboxContainer);

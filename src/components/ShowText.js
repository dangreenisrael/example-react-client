import React, {Component} from 'react';
import {connect} from 'react-redux';

class ShowText extends Component {
  render() {
    const {wordOne, wordTwo} = this.props;
    return (
        <span>
          {wordOne} {wordTwo}
        </span>
    );
  }
}


const mapStateToProps = (state) => {
  return state.demo;
};

export default connect(mapStateToProps)(ShowText);

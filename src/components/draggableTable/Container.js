import React, {Component} from 'react';
import {connect} from 'react-redux'
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Table from './Table';
import Cards from './Cards';

@DragDropContext(HTML5Backend)
class Container extends Component {
  constructor(props) {
    super(props);
    this.handleDrop = this.handleDrop.bind(this);
  }
  render() {
    const headings = ["firstName", "lastName", "userName", "tags"];
    const {influencers} = this.props;
    return (
        <div>
          <div style={{float: "left"}}>
            <Cards handleDrop={this.handleDrop}/>
          </div>
          <div style={{float:"right"}}>
            <Table
                headings={headings} rowData={influencers} onCheck={this.onCheck}/>
          </div>
        </div>);
  }
  handleDrop(item, tagName) {
    const checkedRecords = this.props.currentSelection.ids;
    const ids = checkedRecords.length ? checkedRecords : [item.id];
    console.log(ids, tagName);
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(Container);

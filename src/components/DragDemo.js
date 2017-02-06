import React, {Component} from 'react';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import DragTarget from './drag/DragTarget';
import Table from './draggableTable/Table';

const headings = ["firstName", "lastName", "userName", "tags"];
@DragDropContext(HTML5Backend)
export default class Container extends Component {
  constructor(props) {
    super(props);
    this.onCheck = this.onCheck.bind(this);
    this.state = {
      groups: [
        {name: "Facebook"},
        {name: "Twitter"},
        {name: "Blog"},
        {name: "Instagram"}
      ],
      rowData: {
        c4q3s3d5f: {firstName: "Dan", lastName: "Green", userName: "DGreen", tags: []},
        d4f5t7r54: {firstName: "Mark", lastName: "Wadden", userName: "MWadden", tags: []},
        f53e5t65l: {firstName: "Dave", lastName: "Cutler", userName: "DCutler", tags: []}
      }
    };
  }
  onCheck(id, checked){
    let updatedState = Object.assign({},this.state);
    updatedState.rowData[id].checked = checked;
    this.setState(updatedState);
  }
  render() {
    const {groups, rowData} = this.state;
    return (
        <div>
          <div style={{float: "left"}}>
            {groups.map(({accepts, lastDroppedItem, name}, index) =>
                <DragTarget
                    onDrop={item => this.handleDrop(item, name)}
                    key={index}
                >
                  <h2>{name}</h2>
                </DragTarget>
            )}
          </div>
          <div style={{float:"right"}}>
            <Table headings={headings} rowData={rowData} onCheck={this.onCheck}>
            </Table>
          </div>
        </div>);
  }
  handleDrop(item, tagName) {
    let rowData = Object.assign({}, this.state.rowData);
    rowData[item.id].tags.push(tagName);
    this.setState({rowData: rowData});
  }
}

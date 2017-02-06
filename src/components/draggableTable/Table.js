import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
import DraggableRow from './DraggableRow';

class index extends Component {
  constructor(props){
    super(props);
    this.onCheck = this.onCheck.bind(this);
  }
  onCheck(id, checked){
    this.props.onCheck(id, checked);
  }
  render() {
    const {rowData, headings} = this.props;
    return (
        <Table striped bordered >
          <thead>
          <tr>
            <td>
            </td>
            {headings.map((heading, i)=>{
              return <td key={i}>{heading}</td>
            })}
          </tr>
          </thead>
          <tbody>
            {Object.keys(rowData).map((rowId,i)=>{
              return(
                  <DraggableRow
                      data={rowData[rowId]} onCheck={this.onCheck}
                      headings={headings} key={i} id={rowId}/>
              )
            })}
          </tbody>
        </Table>
    );
  }
}

export default index;

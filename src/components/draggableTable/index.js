import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
import DraggableRow from './DraggableRow';

class index extends Component {
  render() {
    const {rowData, headings} = this.props;
    return (
        <Table striped bordered >
          <thead>
          <tr>
            {headings.map((heading, i)=>{
              return <td key={i}>{heading}</td>
            })}
          </tr>
          </thead>
          <tbody>
            {Object.keys(rowData).map((rowId,i)=>{
              return <DraggableRow data={rowData[rowId]}
                                   visible={headings}
                                   key={i}
                                   id={rowId}/>
            })}
          </tbody>
        </Table>
    );
  }
}

export default index;

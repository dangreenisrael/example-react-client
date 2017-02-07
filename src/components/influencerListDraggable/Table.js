import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
import DraggableRowContainer from './RowDraggableContainer';
import Checkbox from '../Checkbox';
class index extends Component {
  render() {
    const {rowData, headings, onCheck, checkboxStatus} = this.props;
    return (
        <Table striped bordered >
          <thead>
          <tr>
            <td>
              <Checkbox onChange={onCheck} checked={checkboxStatus}/>
            </td>
            {headings.map((heading, i)=>{
              return <td key={i}>{heading}</td>
            })}
            <td>
              Tags
            </td>
          </tr>
          </thead>
          <tbody>
            {Object.keys(rowData).map((rowId,i)=>{
              return  <DraggableRowContainer
                  data={rowData[rowId]}
                  headings={headings} key={i} id={rowId}/>
            })}
          </tbody>
        </Table>
    );
  }
}

export default index;

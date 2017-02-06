import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
import DraggableRowContainer from './RowDraggableContainer';

class index extends Component {
  constructor(props){
    super(props);
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

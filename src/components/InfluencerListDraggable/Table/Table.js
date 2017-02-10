import React, {Component} from 'react';
import update from 'react/lib/update';
import {Table} from 'react-bootstrap';
import DraggableRowContainer from './Row/RowDraggableContainer';
import Checkbox from '../../Checkbox/Checkbox';
import HeadingSortable from './Heading/HeadingSortable';
import _ from 'lodash';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.reorderHeadings = this.reorderHeadings.bind(this);
    this.endColumnDrag = this.endColumnDrag.bind(this);
    this.beginColumnDrag = this.beginColumnDrag.bind(this);
    this.state = {
      headings: [
        {
          id: "12d34as4df",
          propertyName: "firstName"
        },
        {
          id: "sd4fo34",
          propertyName: "lastName"
        },
        {
          id: "as4df2345",
          propertyName: "userName"
        }],
      activeStyle: {backgroundColor: "rgba(23, 42, 251, 0.34)" }
    }
  }

  reorderHeadings(dragIndex, hoverIndex) {
    const {headings} = this.state;
    const dragCard = headings[dragIndex];
    this.setState(update(this.state, {
      headings: {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, dragCard],
        ],
      },
    }));
  }
  beginColumnDrag(headingId){
    const {headings} = this.state;
    const heading = _.find(headings, ['id', headingId]);
    this.setState({activeColumn: heading.propertyName })
  }
  endColumnDrag(){
    this.setState({activeColumn: null });
  }

  render() {
    const {rowData, onCheck, checkboxStatus} = this.props;
    const {headings, activeColumn, activeStyle} = this.state;
    return (
        <Table striped bordered>
          <thead>
          <tr>
            <td>
              <Checkbox onChange={onCheck} checked={checkboxStatus}/>
            </td>
            {headings.map((heading, i) => {
              return <HeadingSortable
                  key={i}
                  index={i}
                  id={heading.id}
                  text={heading.propertyName}
                  reorderHeadings={this.reorderHeadings}
                  activeStyle={activeStyle}
                  endDrag={this.endColumnDrag}
                  activeColumn={activeColumn}
                  beginDrag={this.beginColumnDrag}/>
            })}
            <td>
              Tags
            </td>
          </tr>
          </thead>
          <tbody>
          {Object.keys(rowData).map((rowId, i) => {
            return <DraggableRowContainer
                data={rowData[rowId]}
                activeColumn={activeColumn}
                headings={headings}
                activeStyle={activeStyle}
                key={i} id={rowId}/>
          })}
          </tbody>
        </Table>
    );
  }
}

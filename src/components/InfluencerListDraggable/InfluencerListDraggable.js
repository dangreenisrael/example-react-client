import React, {Component} from 'react';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import TableContainer from './Table/TableContainer';
import CardsContainer from './Cards/CardsContainer';
@DragDropContext(HTML5Backend)
export default class Container extends Component {
  render() {
    return (
        <div>
          <div style={{float: "left"}}>
            <CardsContainer/>
          </div>
          <div style={{float:"right"}}>
            <TableContainer/>
          </div>
        </div>);
  }
}
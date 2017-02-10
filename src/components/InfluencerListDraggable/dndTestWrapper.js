import TestBackend from 'react-dnd-test-backend';
import { DragDropContext } from 'react-dnd';
import React, {Component} from 'react';
import { Provider } from 'react-redux';
import store from '../../redux/store';

export default (InnerComponent) => {
  @DragDropContext(TestBackend)
  class TestContextContainer extends Component {
    render() {
      return <Provider store={store}>{InnerComponent}</Provider>;
    }
  }
  return TestContextContainer;
}
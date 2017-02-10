import React from 'react';
import renderer from 'react-test-renderer';
import RowDraggable from './RowDraggable';
import {Provider} from 'react-redux';
import store from '../../../../redux/store';

const headings = ["firstName", "lastName", "userName"];
const influencer = {
  firstName: 'Dan',
  lastName: 'Green',
  userName: 'DGreen',
  tags: []
};

const OriginalRow = RowDraggable.DecoratedComponent;
const identity = el => el;

test('Link renders correctly', () => {
  const tree = renderer.create(
      <Provider store={store}>
        <OriginalRow
            name='test'
            connectDragSource={identity}
            connectDragPreview={identity}
            headings={headings}
            data={influencer}
        />
      </Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

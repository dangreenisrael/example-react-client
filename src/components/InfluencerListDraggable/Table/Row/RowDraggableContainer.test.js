import React from 'react';
import renderer from 'react-test-renderer';
import RowDraggable from './RowDraggable';
import dndTestWrapper from '../../dndTestWrapper';

const headings = ["firstName", "lastName", "userName"];
const influencer = {
  firstName: 'Dan',
  lastName: 'Green',
  userName: 'DGreen',
  tags: []
};

test('Row Draggable Renders correctly', () => {
  const RowDraggableWrapper = dndTestWrapper(
      <RowDraggable name='test'
                    headings={headings}
                    data={influencer}
      />);
  const tree = renderer.create(<RowDraggableWrapper/>).toJSON();
  expect(tree).toMatchSnapshot();
});

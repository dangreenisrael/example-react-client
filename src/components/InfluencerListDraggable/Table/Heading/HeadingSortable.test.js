import React from 'react';
import renderer from 'react-test-renderer';
import HeadingSortable from './HeadingSortable';
import dndTestWrapper from '../../dndTestWrapper';

test('HeadingSortable Renders Correctly', () => {
  const HeadingSortableWrapper = dndTestWrapper(<HeadingSortable text="test heading"/>);
  const tree = renderer.create( <HeadingSortableWrapper/>).toJSON();
  expect(tree).toMatchSnapshot();
});
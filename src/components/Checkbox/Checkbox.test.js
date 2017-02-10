import React from 'react';
import renderer from 'react-test-renderer';
import Checkbox from './Checkbox';

test('Checkbox Renders Correctly', () => {
  const tree = renderer.create(
      <Checkbox onChange={()=>{}} checked={true} name="checkMe"/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
import React from 'react';
import Table from './Table';
import expect from 'expect';
import Checkbox from '../../Checkbox/Checkbox';
import HeadingSortable from './Heading/HeadingSortable'
import RowDraggableContainer from './Row/RowDraggableContainer'
import { shallow } from 'enzyme';

const headings = ["firstName", "lastName", "userName"];
const influencers = {
  c4q3s3d5f: {
    firstName: 'Dan',
    lastName: 'Green',
    userName: 'DGreen',
    tags: []
  },
  d4f5t7r54: {
    firstName: 'Mark',
    lastName: 'Wadden',
    userName: 'MWadden',
    tags: []
  },
  f53e5t65l: {
    firstName: 'Dave',
    lastName: 'Cutler',
    userName: 'DCutler',
    tags: [
      'Twitter'
    ]
  }
};

describe('<Table/>', () => {
  it('should render a <Checkbox />', () => {
    const wrapper = shallow( <Table
        dragDropManager={()=>{}}
        headings={headings}
        rowData={influencers}
        onCheck={()=>{}}
        checkboxStatus={true}/>);
    expect(wrapper.find(Checkbox));
  });

  it('should render 3 <HeadingSortable />', () => {
    const wrapper = shallow( <Table
        dragDropManager={()=>{}}
        headings={headings}
        rowData={influencers}
        onCheck={()=>{}}
        checkboxStatus={true}/>);
    expect(wrapper.find(HeadingSortable).length).toBe(3);
  });

  it('should render 3 <RowDraggableContainer />', () => {
    const wrapper = shallow( <Table
        dragDropManager={()=>{}}
        headings={headings}
        rowData={influencers}
        onCheck={()=>{}}
        checkboxStatus={true}/>);
    expect(wrapper.find(RowDraggableContainer).length).toBe(3);
  });

});


import React, {Component} from 'react';
import DragTarget from './CardTargetable';
import {addTag} from '../../../redux/influencers';
import {connect} from 'react-redux'
import {clearSelection} from '../../../redux/currentSelection';


class Cards extends Component {
  constructor(props){
    super(props);
    this.handleDrop = this.handleDrop.bind(this);
  }

  handleDrop(item, tagName) {
    const checkedRecords = this.props.currentSelection.ids;
    const influencerIds = checkedRecords.length ? checkedRecords : [item.id];
    influencerIds.forEach(influencerId =>{
      this.props.dispatch(addTag(influencerId, tagName));
    });
    this.props.dispatch(clearSelection());
  }

  render() {
    const {tags} = this.props;
    return (
        <div>
          {tags.tags.map((name, index) =>
              <DragTarget onDrop={item => this.handleDrop(item, name)} key={index}>
                <h2>{name}</h2>
              </DragTarget>
          )}
        </div>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(Cards);

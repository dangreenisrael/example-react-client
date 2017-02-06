import React, {Component} from 'react';
import DragTarget from './CardTargetable';

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: [
        {name: "Facebook"},
        {name: "Twitter"},
        {name: "Blog"},
        {name: "Instagram"}
      ]
    };
  }
  render() {
    const {groups} = this.state;
    return (
        <div>
          {groups.map(({accepts, lastDroppedItem, name}, index) =>
              <DragTarget
                  onDrop={item => this.props.handleDrop(item, name)}
                  key={index}
              >
                <h2>{name}</h2>
              </DragTarget>
          )}
        </div>
    );
  }
}

export default Cards;

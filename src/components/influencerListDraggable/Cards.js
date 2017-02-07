import React, {Component} from 'react';
import DragTarget from './CardTargetable';

class Cards extends Component {
  render() {
    const {cards} = this.props;
    return (
        <div>
          {cards.map((name, index) =>
              <DragTarget onDrop={item => this.props.handleDrop(item, name)} key={index}>
                <h2>{name}</h2>
              </DragTarget>
          )}
        </div>
    );
  }
}

export default Cards;

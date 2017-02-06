import React, {Component} from 'react';
import Dragula from 'dragula';
import {Tag} from '@blueprintjs/core'
export default class extends Component {
  dragulaDecorator = (componentBackingInstance) => {
    if (componentBackingInstance) {
      let options = { };
      Dragula([componentBackingInstance], options);
    }
  };

  render () {
    return <div className='container' ref={this.dragulaDecorator}>
      <div>
        <Tag draggable="true">Swap her around</Tag>
        <Tag draggable="true">Swap him around</Tag>
      </div>
      <br/>
      <br/>
      <div>
        <Tag draggable="true">Swap them around</Tag>
        <Tag draggable="true">Swap us around</Tag>
        <Tag draggable="true">Swap things around</Tag>
        <Tag draggable="true">Swap everything around</Tag>
      </div>
    </div>;
  }
}

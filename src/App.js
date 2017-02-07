import React, {Component} from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import Drag from './components/influencerListDraggable/Container';

class App extends Component {
  render() {
    return (
        <div className="App">
          <Route exact path="/" component={Drag}/>
        </div>
    );
  }
}

export default App;

import React, {Component} from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import MainPage from './components/MainPage';
import LiveUpdates from './components/LiveUpdates';

import SyncWithSockets from './components/SyncWithSocket';

class App extends Component {
  render() {
    return (
        <div className="App">
          <Route exact path="/" component={MainPage}/>
          <Route exact path="/live-updates" component={LiveUpdates}/>
          <SyncWithSockets/>
        </div>
    );
  }
}

export default App;

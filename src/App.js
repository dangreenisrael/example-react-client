import React, {Component} from 'react';
import './App.css';
import InfluencerListDraggable from './components/InfluencerListDraggable/InfluencerListDraggable';
import { Provider } from 'react-redux';
import store from './redux/store';

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <div className="App">
            <InfluencerListDraggable/>
          </div>
        </Provider>

    );
  }
}

export default App;

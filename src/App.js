import React, {Component} from 'react';
import './App.css';
import Drag from './components/influencerListDraggable/Container';
import { Provider } from 'react-redux';
import store from './redux/store';

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <div className="App">
            <Drag/>
          </div>
        </Provider>

    );
  }
}

export default App;

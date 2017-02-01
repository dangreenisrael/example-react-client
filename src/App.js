import React, {Component} from 'react';
import './App.css';
import BackButton from './components/NavigationButtons';
import TopicChooser from './components/TopicChooser';
import WordGenerator from './components/WordGenerator';
import {Jumbotron} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
        <div className="App">
          <Jumbotron>
            <h1>React Demo</h1>
            <p>This is a demo of some cool react stuff</p>
          </Jumbotron>
        </div>
    );
  }
}

export default App;

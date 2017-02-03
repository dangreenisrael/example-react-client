import React, {Component} from 'react';
import Form from './Form';
import {Jumbotron} from 'react-bootstrap';

class App extends Component {

  render() {
    return (
        <Jumbotron>
          <h1>React Demo</h1>
          <p>This is a demo of some cool react stuff</p>
          <Form/>
        </Jumbotron>
    );
  }
}

export default App;

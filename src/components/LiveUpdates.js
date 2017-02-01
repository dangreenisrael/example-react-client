import React, {Component} from 'react';
import Form from './Form';
import ShowText from './ShowText';
import {Jumbotron} from 'react-bootstrap';
class App extends Component {

  render() {
    return (
        <Jumbotron>
          <h1>Live Update</h1>
          <h2>
            <ShowText/>
          </h2>
        </Jumbotron>
    );
  }
}

export default App;

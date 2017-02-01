import React, {Component} from 'react';
import {setProperty} from '../redux/actionCreators';
import { connect } from 'react-redux';
import {Form, FormGroup, FormControl} from 'react-bootstrap';
class TopicChooser extends Component {
  constructor(props){
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.props.dispatch(setProperty(name, value));
  }
  render() {
    return (
        <Form inline>
          <FormGroup controlId="formInlineName">
            <FormControl
                type="text"
                placeholder="Word One"
                name="wordOne"
                onChange={this.handleInputChange} />
          </FormGroup>
        </Form>
    );
  }

}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(TopicChooser);
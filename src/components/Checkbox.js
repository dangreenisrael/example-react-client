import React, {Component} from 'react';

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: props.isChecked || false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event) {
    const value = event.target.checked;
    this.setState({
      isChecked: value
    });
    if (this.props.onChange){
      this.props.onChange(value);
    }
  }
  render() {
    const {name} = this.props;
    return (
        <input
            name={name}
            type="checkbox"
            checked={this.state.isChecked}
            onChange={this.handleInputChange} />
    );
  }

}

export default Checkbox;

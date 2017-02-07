import React, {Component} from 'react';

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event) {
    const value = event.target.checked;
    if (this.props.onChange){
      this.props.onChange(value);
    }
  }
  render() {
    const {name,checked} = this.props;
    const isIndeterminate = (checked === "indeterminate");
    return (
        <input
            name={name}
            type="checkbox"
            checked={checked}
            ref={elem => elem && (elem.indeterminate = isIndeterminate)}
            onChange={this.handleInputChange} />

    );
    /*
     * About the weird ref thing, See: https://github.com/facebook/react/issues/1798
     */
  }
}

export default Checkbox;

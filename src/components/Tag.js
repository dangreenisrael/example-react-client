import React, {Component} from 'react';

const style={
  backgroundColor: "rgba(244, 97, 124, 0.69)",
  borderRadius: "30px",
  padding: "5px"
};
class Tag extends Component {
  constructor(props){
    super(props);
    this.remove = this.remove.bind(this);
  }
  remove(){
    const {remove, title} = this.props;
    if (remove){
      remove(title);
    }
  }
  render() {
    return (
        <span style={style}>
          {this.props.title}
          <i onClick={this.remove} className="glyphicon glyphicon-remove"/>
        </span>
    );
  }

}

export default Tag;

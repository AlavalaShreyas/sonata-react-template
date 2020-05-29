import React from "react";
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';

class Sliders extends React.Component {
  constructor (props) {
    super(props);
    const {value,min,max,labels,orientation} = props;
    this.state = {
      value: this.props.value
    };
  }
        
  handleChange(value){
    this.setState({
      value: value
    });
  };
    
  render () {
    return (
      <Slider
        min={this.props.min}
        max={this.props.max}
        value={this.state.value}
        onChange={this.handleChange.bind(this)}
        tooltip={true}
        labels={this.props.labels}
        orientation={this.props.orientation}
      />
    );
  }
};

export default Sliders;


import React, { Component } from 'react';

class SliderNumber extends Component {

  render() {
    const value = this.props.value
    
    return (
      <p className="slider-range__number col">{value}</p> 
    );
  }
}

export default SliderNumber;

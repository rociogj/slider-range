import React, { Component } from 'react';

class SliderNumber extends Component {

  render() {
    const value = this.props.value
    
    return (
      <p>{value}</p>
    );
  }
}

export default SliderNumber;

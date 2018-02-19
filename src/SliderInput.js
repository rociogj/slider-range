import React, { Component } from 'react';

class SliderInput extends Component {

  render() {
    const value = this.props.value
    const onChangeValue = this.props.onChangeValue

    return (
      <input className="slider__range" type="range" min="1" max="100" value={value} onChange={(event) => onChangeValue(event.target.value)}/>
    );
  }
}

export default SliderInput;

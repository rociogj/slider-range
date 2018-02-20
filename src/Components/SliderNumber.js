import React, { Component } from 'react';

class SliderNumber extends Component {

  render() {
    const value = this.props.value
    const onChangeValue = this.props.onChangeValue
    
    return (
      <div className="slider-range__number col">
        <label className="hidden" for="slider-range-number">Input range text</label>
        <input className="slider-range__number-input" type="number" min="0" max="100" name="slider-range-number" id="slider-range-number" aria-valuemin="1" aria-valuemax="100" aria-valuenow={value} value={value} onChange={(event) => onChangeValue(event.target.value)} tabindex="0"/>
      </div>
    );
  }
}

export default SliderNumber;

import React, { Component } from 'react';

class SliderInput extends Component {

  render() {
    const value = this.props.value
    const onChangeValue = this.props.onChangeValue

    return (
      <div className="slider-range__input col">
        <span className="slider-range__val slider-range__min col">0</span>
        <div className="slider-range__bar col">
          <label className="hidden" for="slider-range-input">Input range bar</label>
          <input className="slider-range__bar-input" type="range" min="0" max="100" name="slider-range-input" id="slider-range-input" aria-valuemin="1" aria-valuemax="100" aria-valuenow={value} value={value} onChange={(event) => onChangeValue(event.target.value)} tabindex="0" role="slider"/>
          <span className="slider-range__bar-val" style={{ width: value + '%' }} aria-hidden="true"></span>
        </div>
        <span className="slider-range__val slider-range__max col">100</span>
      </div>
    );
  }
}

export default SliderInput;

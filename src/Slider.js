import React, { Component } from 'react';
import './Styles/Slider.css';
import SliderInput from './SliderInput';
import SliderNumber from './SliderNumber';

class Slider extends Component {

  state = {
    value: '50'
  }

  updateValue = (value) => {
    this.setState({ value: value.trim() })
  }

  render() { 
    const value = this.state.value

    return (
      <div className="slider">
        <SliderInput onChangeValue={this.updateValue} value={value} />
        <SliderNumber value={value} />
      </div>
    );
  }
}

export default Slider;

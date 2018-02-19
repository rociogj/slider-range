import React, { Component } from 'react';
import Slider from './Slider';

class App extends Component {
  render() {
    return (
      <div className="App" role="main">
        <div class="wrapper">
          <h1 className="title">Slider label</h1>
          <Slider />        
        </div>
      </div>
    );
  }
}

export default App;

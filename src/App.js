import React, { Component } from 'react';
import Child from './Child';

class App extends Component {
  state = { 
    name : "bilal"
   };
  Test() {
    console.log("bilaaaaaal!");
  }
  handleClick = () => {
    console.log(this.state.name);
  }

  handleMouse = () => {
    console.log("mouse move");
  }
  render() {
    return (
      <div className="App">
        <Child />
          <button onClick={this.handleClick}>Click</button>
          <button onMouseMove={this.handleMouse}>MouseMove</button>
      </div>
    );
  }
}

export default App;

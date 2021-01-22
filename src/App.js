import React, { Component } from 'react';
import Child from './Child';

class App extends Component {
  state = {  };
  Test() {
    console.log("bilaaaaaal!");
  }
  Test2 = () => {
    console.log("coucouuu");
  }
  render() {
    return (
      <div className="App">
        <Child />
          { this.Test2() }
      </div>
    );
  }
}

export default App;

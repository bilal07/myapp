import React, { Component } from 'react';
import Child from './Child';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  state = { 
    name : 'bilal',
    age : 25
   };

   change = () => {
     this.setState({
       name : 'ahmed',
       age : 24
     })
   }
  render() {
    return (
      <div className="App">
        <button onClick={this.change}>change state</button>
        <p>{this.state.name}</p>
        <p>{this.state.age}</p>
      </div>
    );
  }
}

export default App;

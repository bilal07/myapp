import React, { Component } from 'react';
import Items from './components/Items'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  state = {
    items : [
        {id:1, name:'ahmed', age:22},
        {id:2, name:'bilal', age:25},
    ]
}
  render() {
    return (
      <div className="App">
        List des items
        <Items items = {this.state.items} />
      </div>
    );
  }
}

export default App;

/*
- class based compoent
- function component

*/
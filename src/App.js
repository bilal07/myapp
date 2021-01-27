import React, { Component } from 'react';
import Items from './components/Items'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  state = {
    items : [
      {id:1, name:'bilal', age:22, count:2},
      {id:2, name:'ahmed', age:24, count:1},
      {id:3, name:'adil', age:23, count:3},
      {id:4, name:'gaga', age:45, count:3}
    ]
  }
  
  render() {
    return (
      <div className="App">
        Condition output
        <Items items={this.state.items} />
      </div>
    );
  }
}

export default App;

/*
- class based compoent
- function component

*/
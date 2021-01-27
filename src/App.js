import React, { Component } from 'react';
import Items from './components/Items'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  /*
    lifeCycle Components
    constructor
    render
    componentDidMount
    componentDidUpdate

  */
 constructor(){
   super();
   console.log("constructor");
 }
 componentDidMount() {
   console.log("componentDidMount");
 }
 componentDidUpdate(prevProps, prevState) {
  console.log("componentDidUpdate", prevProps, prevState);
 }
  state = {
    items : [
      {id:1, name:'bilal', age:22, count:2},
      {id:2, name:'ahmed', age:24, count:1},
      {id:3, name:'adil', age:23, count:3},
      {id:4, name:'gaga', age:45, count:3}
    ]
  }
  handleClick =(e) => {
    let items = this.state.items;
    items.push({id:5, name:'mimo', age:30, count:5});
    this.setState({
      items:items
    })
  }
  handleDelete =(e) => {
    this.setState({
      items : [
        {id:2, name:'ahmed', age:24, count:1},
      ]
    })
  }
  render() {
    console.log("render");
    return (
      <div className="App">
        Condition output
        <Items items={this.state.items} />
        <button onClick={this.handleClick}>Add</button>
        <button onClick={this.handleDelete}>Delete</button>
      </div>
    );
  }
}

export default App;

/*
- class based compoent
- function component

*/
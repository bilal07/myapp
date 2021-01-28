import React, { Component } from 'react';
import { BrowseRouter, BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';

import Items from './components/Items';
import Nav from './components/Nav';
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
     <BrowserRouter>
      <div className="App">
        <Nav />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/blog" component={Blog} />
      </div>
     </BrowserRouter>
    );
  }
}

export default App;

/*
- class based compoent
- function component

*/
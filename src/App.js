import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import Rout from './components/Rout';

import Items from './components/Items';
import Nav from './components/Nav';
import Col from './components/Col';
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
 
  render() {
    console.log("render");
    return (
     <table border="1">
       <tbody>
        <tr>
          <Col />
        </tr>
       </tbody>
     </table>
    );
  }
}

export default App;

/*
- class based compoent
- function component

*/
import React, { Component } from 'react';
import Items from './components/Items'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  state = {
    name :''
  }
  handleChange = (e) => {
    this.setState({
      name : e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.name)
  }
  render() {
    return (
      <div className="App">
        Form Part 2
        <form onSubmit={this.handleSubmit}>
          <select name="" id="" onChange={this.handleChange}>
            <option value="value1">value 1</option>
            <option value="value2">value 2</option>
            <option value="value3">value 3</option>
          </select>
          <input type="submit" value="send" />
        </form>
        {this.state.name}
      </div>
    );
  }
}

export default App;

/*
- class based compoent
- function component

*/
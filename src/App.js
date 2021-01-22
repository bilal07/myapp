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
        Form Part 1
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange}/>
          <button type="submit">Submit</button>
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
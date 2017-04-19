import React, { Component } from 'react';
import Users from './Users';
import Brand from './Brand';
import './App.css';

class App extends Component {
  render() {
    return (

      <div className="App">
        <Brand />
        <hr/>
        <Users />
      </div>
    );
  }
}

export default App;

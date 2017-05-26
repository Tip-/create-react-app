import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  handleClick = async () => {
    const wkx = await import('wkx');
    console.log(wkx);
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 onClick={this.handleClick}>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, eit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import Intro from './Intro';
import Album from './Album';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Intro />
        <Album />
        
      </div>
    );
  }
}

export default App;

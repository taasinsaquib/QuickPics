import React, { Component } from 'react';
import Intro from './Components/Intro';
import AlbumContainer from './Components/AlbumContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Intro />
        <div className="album-container" >
          <AlbumContainer />
        </div>


      </div>
    );
  }
}

export default App;

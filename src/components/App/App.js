import React, { Component } from 'react';
import Tile from '../Tile/Tile';
import './App.css';

class App extends Component {
  render() {
      const tiles = [];
      for (let idx = 1; idx < 17; idx++) {
          tiles.push(<Tile key={idx} id={idx} flippedColor={idx % 2 ? "green" : "blue"}/>)
      }
    return (
      <div className="App">
        <ul>{tiles}</ul>
      </div>
    );
  }
}

export default App;

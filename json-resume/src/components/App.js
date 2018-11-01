import React, { Component } from 'react';
import '../styles/App.css';
import Navbar from './Navbar';
import Gridcontainer from './Gridcontainer';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Navbar/>
          <div className="main">
          <Gridcontainer/>
          </div>
      </div>
    );
  }
}

export default App;

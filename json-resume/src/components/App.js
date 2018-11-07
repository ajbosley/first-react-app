import React, { Component } from 'react';
import '../styles/App.css';
import Navbar from './Navbar';
import Topbar from './Topbar';
import Gridcontainer from './Gridcontainer';
import Sidenav from './Sidenav';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Sidenav />
          <Navbar/>
          <Topbar />
          <div className="main">
          <Gridcontainer/>
          </div>
      </div>
    );
  }
}

export default App;

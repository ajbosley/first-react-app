import React, { Component } from 'react'
import Topbaritems from './Topbaritems';
import '../styles/Topbar.css';

class Topbar extends Component {
  render() {
    return (
      <div className="topBar">
        <Topbaritems />
      </div>
    )
  }
}

export default Topbar
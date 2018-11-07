import React, { Component } from 'react'
import '../styles/Topbaritems.css'

class Topbaritems extends Component {
  render() {
    return (
      <div className="topBarItemsContainer">
        <div className="topBarItems">
          <ul>
            <li>
              <a href="#callme">Phone number</a>
            </li>
            <li>
              <a href="#home">Image Logo</a>
            </li>
            <li>
              <a href="#emailORmailto">Email address</a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Topbaritems;
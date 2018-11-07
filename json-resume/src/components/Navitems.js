import React, { Component } from 'react'
import '../styles/Navitems.css';

class Navitems extends Component {
    open(){
        document.querySelector('.sideNavContainer').style.width = '100%';
        document.querySelector('.sideNav').style.width = '250px';    
    }
  render() {
    return (
        <div className="navItemsContainer">
            <ul className="navItems">
                <a href="#home">
                    <li>
                        <span className="mobile"><i className="fa fa-home"></i></span>
                        <span className="desktop">Home</span>
                    </li>
                </a>
                <a href="#gallery">
                    <li>
                        <span className="mobile"><i className="fa fa-picture-o"></i></span>
                        <span className="desktop">Gallery</span>
                    </li>
                </a>

                <a href="#blog">
                    <li>
                        <span className="mobile"><i className="fa fa-edit"></i></span>
                        <span className="desktop">Blog</span>

                    </li>
                </a>
                <a href="#github">
                    <li>
                        <span className="mobile"><i className="fa fa-code-fork"></i></span>
                        <span className="desktop">GitHub</span>

                    </li>
                </a>
                <a href="#sidebar">

                    <li onClick={this.open.bind(this)}>
                        <span className="menuBar"><i className="fa fa-bars"></i></span>
                    </li>
                </a>

            </ul>
        </div>
    )
  }
}

export default Navitems;
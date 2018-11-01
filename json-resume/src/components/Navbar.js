import React, { Component } from 'react';
import '../styles/Navbar.css';

class Navbar extends Component {
    render(){
        return(
            <nav>
                <div className="nav-wrapper">
                    <a>Logo</a>
                    <ul id="mobile-nav" className="right">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Resume</a></li>
                        <li><a href="#"><i className="material-icons">menu</i></a></li>
                    </ul>
                </div>
            </nav>
        )
    }   
}

export default Navbar
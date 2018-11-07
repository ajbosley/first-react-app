import React, { Component } from 'react';
import Navitems from './Navitems';
import '../styles/Navbar.css';

class Navbar extends Component {
    render(){
        return(
                <div className="navBar">
                    <Navitems />
                </div>
        )
    }   
}

export default Navbar
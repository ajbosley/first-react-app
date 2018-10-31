import React, { Component } from 'react';

class Navbar extends Component {
    render(){
        return(
            <div>
                <p>My name is: {this.props.name} </p>
            </div>
        )
    }   
}

export default Navbar
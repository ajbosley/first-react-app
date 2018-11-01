import React, { Component } from 'react';
import '../styles/Gridcontainer.css';
import Posts from './Posts'
import About from './About'
import Resume from './Resume'
import Contact from './Contact'


class Gridcontainer extends Component {
    render(){
        return(
            <div className="grid-container">
                <div className="posts block">
                    <Posts />
                </div>
                <div className="about block">
                    <About />
                </div>
                <div className="resume block">
                    <Resume />
                </div>
                <div className="contact block">
                    <Contact />
                </div>
            </div>
        )
    }   
}

export default Gridcontainer
import React, { Component } from 'react'
import '../styles/Sidenav.css';

class Sidenav extends Component {
    close(){
        document.querySelector('.sideNavContainer').style.width = '0px';
        document.querySelector('.sideNav').style.width = '0px';
    }

  render() {
    return (
        <div className="sideNavContainer" onClick={this.close.bind(this)}>
            <div className="sideNav">
                <div className="closeButton" onClick={this.close.bind(this)}>
                    <i className="fa fa-times"></i>
                </div>
                <div className="sideNavItems">
                    <ul>
                            <a href="#home"><li><span>Home</span></li></a>
                            <a href="#gallery"><li><span>Gallery</span></li></a>

                            <a href="#blog"><li><span>Blog</span></li></a>

                            <a href="#github"><li><span>GitHub</span><span className="smallText"> - Guideish</span></li></a>

                            <a href="#resume"><li><span>Resume / CV</span></li></a>
                    </ul>
                </div>
                <div className="sideNavFooter">
                Hello from the footer side
                </div>
            </div>
        </div>

    )
  }
}

export default Sidenav;

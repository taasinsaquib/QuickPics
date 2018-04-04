import React, { Component } from 'react';
import './Intro.css';

import pic from "../images/Intro/Intro1.jpg";

class Intro extends Component{
  handleClick = () => {
    console.log("hi");
  };

  render(){
    return(
      <div className="intro-div" onClick={this.handleClick}>
        <p className="intro-name">Taasin Saquib</p>
        <img className="intro-pic" src={pic}/>
      </div>
    );
  }
}

export default Intro;

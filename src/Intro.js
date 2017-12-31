import React, { Component } from 'react';
import './Intro.css';

import pic from "./images/Intro/dahlia.jpg";

class Intro extends Component{
  render(){
    return(
      <div class="intro-div">
        <p class="intro-name">Taasin Saquib</p>
        <img class="intro-pic" src={pic}/>
      </div>
    );
  }
}

export default Intro;

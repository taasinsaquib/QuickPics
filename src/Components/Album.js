import React, { Component } from 'react';
import './Album.css';

class Album extends Component{

  render(){
    return(

      this.props.images.map(function(i){
        var pic = i.image
        console.log(pic);
        return <div><img src={pic}/></div>

      })

    );
  }

}

export default Album;

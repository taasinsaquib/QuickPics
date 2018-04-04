import React, { Component } from 'react';
import './Album.css';

class Album extends Component{

  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("hi");
  }
npm
  render(){
    // console.log(this.props.images[0].image);
    return(
      <div className="album" onClick={this.handleClick}>
        <img className="album-thumbnail" src={this.props.images[0].image}/>
        <p className="album-name">title</p>
      </div>
    )

    // return(
    //
    //   this.props.images.map(function(i){
    //     var pic = i.image
    //     console.log(pic);
    //     return (
    //       <div className="album" >
    //         <img className="album-thumbnail" src={pic}/>
    //         <p className="album-name">title</p>
    //       </div>
    //     )
    //
    //   })
    //
    // );
  }

}

export default Album;

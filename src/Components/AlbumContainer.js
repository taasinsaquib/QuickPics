import React, { Component } from 'react';
import './AlbumContainer.css';
import config from './config.js';
import Album from './Album.js';

class AlbumContainer extends Component{

  constructor(props){
    super(props);
    this.state = {
      albums : Object.values(config)[0]
    };
  }

  render(){



    return(
        this.state.albums.map(function(keys){
          return <Album name={keys.albumName} images = {keys.images} />
        })

    );
  }
}

export default AlbumContainer;

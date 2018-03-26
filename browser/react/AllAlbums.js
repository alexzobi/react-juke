
import React from 'react';

export default class AllAlbums extends React.Component{
  //if there is nothing necessary in the constructor, props are automatically passed on and the constructor is not necessary.
  render(){
    return (
    <div className="col-xs-4">
      <a onClick={()=> this.props.handleClick(this.props.album.id)} className="thumbnail" href="#">
        <img src={this.props.album.imageUrl} />
        <div className="caption">
          <h5>
            <span>{this.props.album.name}</span>
          </h5>
          <small>{this.props.album.songs.name}</small>
        </div>
      </a>
    </div>
    )
  }
  }


import React from 'react';
import AllAlbums from './AllAlbums';
import axios from 'axios';
import SingleAlbum from './SingleAlbum';
import Sidebar from './Sidebar.js';


export default class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [],
      selectedAlbum: {}
    }
    this.handleClick = this.handleClick.bind(this);
    this.reset = this.reset.bind(this);
  }

  handleClick(albumId){
    axios.get('api/albums/' + albumId)
      .then(response => {
        return response.data;
      })
      .then(data=>{
        return this.setState({selectedAlbum: data})
      })
      .catch(err => {
        console.error('error');
        console.error(err);
      });
    }

  reset(){
    return this.setState({selectedAlbum: {}})
  }

  componentDidMount(){

    axios.get('api/albums')
      .then(response => {
        return response.data;
      })
      .then(data=>{
        return this.setState({albums: data})
      })
      .catch(err => {
        console.error('error');
        console.error(err);
      });

  }

  render() {
    return (
    <div>  
        <Sidebar reset={this.reset}/>
        <div className="col-xs-10">
            <h3>Albums</h3>
            <div className="row">
        <div>
          {
            this.state.selectedAlbum.id ? <SingleAlbum album={this.state.selectedAlbum}/> :
          
              this.state.albums.map((album) => {
                return <AllAlbums  key={album.id} album={album} handleClick={this.handleClick}/>
              }) // watch out - no semicolon!
          
          }
          
          </div>
        </div>
      </div>
    </div>
    )
  }
}




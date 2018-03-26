import React from 'react';
import AllAlbums from './AllAlbums';
import axios from 'axios';
import SingleAlbum from './SingleAlbum';
import Sidebar from './Sidebar.js';
import Footer from './Footer.js';

const audio = document.createElement('audio');

export default class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [],
      selectedAlbum: {},
      currentSong: {},
    }
    this.handleClick = this.handleClick.bind(this);
    this.reset = this.reset.bind(this);
    this.play = this.play.bind(this);
  }

  play(songId) {

    axios.get('api/songs/' + songId)
      .then(response => {
        return response.data;
      })
      .then(data=>{
        audio.src = data.audioUrl;
        audio.load();
        audio.play();
        return this.setState({currentSong: data})
      })
      .catch(err => {
        console.error('error');
        console.error(err);
      });


    // audio.src = 'https://learndotresources.s3.amazonaws.com/workshop/5616dbe5a561920300b10cd7/Dexter_Britain_-_03_-_The_Stars_Are_Out_Interlude.mp3';
    // audio.load();
    // audio.play();
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
  };



  render() {
    return (
    <div>
        <Sidebar reset={this.reset}/>
        <div className="col-xs-10">
            <h3>Albums</h3>
            <div className="row">
        <div>
          {
            this.state.selectedAlbum.id ? <SingleAlbum play={this.play} album={this.state.selectedAlbum} currentSong={this.state.currentSong}/> :

              this.state.albums.map((album) => {
                return <AllAlbums  key={album.id} album={album} handleClick={this.handleClick}/>
              }) // watch out - no semicolon!

          }

          </div>
        </div>
      </div>
      <Footer play={this.play}/>
    </div>
    )
  }
}




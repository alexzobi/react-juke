import React from 'react';

export default class SingleAlbum extends React.Component{
  constructor(props){
    super(props)

  }

  render(){
    if(this.props.album.id){
      return (
        <div key={this.props.album.id} className="album col-xs-10">
          <div>
            <h3>{this.props.album.name}</h3>
            <img src={this.props.album.imageUrl} className="img-thumbnail" />
          </div>
          <table className='table'>
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Artists</th>
                <th>Genre</th>
              </tr>
            </thead>
            <tbody>
              {
              this.props.album.songs.map(song=>{
                return (
                  <tr key={song.id}>
                    <td>
                      {
                      this.props.currentSong.id === song.id
                      ? <div></div>
                      :
                      <button onClick={() => this.props.play(song.id)} className="btn btn-default btn-xs">
                        <span className="glyphicon glyphicon-play"></span>
                      </button>
                      }
                    </td>
                    <td>{song.name}</td>
                    <td>{song.artists[0].name}</td>
                    <td>{song.genre}</td>
                  </tr>
                )
              })
              }
            </tbody>
          </table>
        </div>
      )
    }
    else {return null;}
  }
}

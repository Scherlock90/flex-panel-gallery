import React from 'react';
// import './forAlbum.css';

class Albums extends React.Component {
  render () {
    const albums = this.props.albums.map((album, i) => {
      return (
          <div className="thumbik" onClick={this.props.onClick(album)} key={album.id + 1}>
              <AlbumThumb name={album.name}  id={i} key={i} />
          </div>
      );
  });
    return (
        <div className="thumbContainer">{albums}</div>
    )
  }
}

const AlbumThumb = (props) => (
  <div className="thumb">
    <div className="thumbImgWrap">
      <img src={require('./Images/' + props.img)} alt={props.name} />
    </div>
    <h3 className="thumbTitle">{props.name}</h3>
  </div>
);



export default Albums;
import React from 'react';

import * as AlbumApiUtil from '../../utils/album_api_util';

import AlbumItem from './_album';

class AlbumIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [],
    };
  }

  componentDidMount() {
    AlbumApiUtil.fetchAlbums().then(
      data => {
        this.setState({ albums: data });
      }
    )
  }

  render() {
    const { albums } = this.state;
    let albumsContent;

    if (albums.length > 0) {
      albumsContent = (
        albums.map(album => (
          <AlbumItem key={album.id} album={album} />
        ))
      )
    }

    return (
      <div className="content__middle">
        <div id="albums">
          <div className="media-cards">
            {albumsContent}
          </div>
        </div>
      </div>
    )
  }
}

export default AlbumIndex;

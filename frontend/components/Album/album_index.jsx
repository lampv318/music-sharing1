import React from 'react';

import * as AlbumApiUtil from '../../utils/album_api_util';

class AlbumIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [],
    };

    AlbumApiUtil.fetchAlbums().then(
      (data) => {
        this.setState({ albums: data });
      }
    )
  }

  setContent = (newContent, id) => {
    this.props.setContent(newContent, id)
  }

  render() {
    const { albums } = this.state;
    let albumsContent;

    if (albums.length > 0) {
      albumsContent = (
        albums.map(album => (
          <div className="media-card" key={ album.id }>
            <div
              className="media-card__image"
              style={{
                backgroundImage:
                  'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/hoodie.jpg)'
              }}
            >
              <i className="ion-ios-play" />
            </div>

            <a className="media-card__footer" onClick={ () => this.setContent('album_show', album.id) }>{ album.name }</a>
          </div>
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
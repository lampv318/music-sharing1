import React from 'react';

import * as ArtistApiUtil from '../../utils/artist_api_util';

class ArtistIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: [],
    };

    ArtistApiUtil.fetchArtists().then(
      (data) => {
        this.setState({ artists: data });
      }
    )
  }

  setContent = (newContent, id) => {
    this.props.setContent(newContent, id)
  }

  render() {
    const { artists } = this.state;
    let artistsContent;

    if (artists.length > 0) {
      artistsContent = (
        artists.map(artist => (
          <div className="media-card" key={ artist.id }>
            <div
              className="media-card__image"
              style={{
                backgroundImage:
                  'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/hoodie.jpg)'
              }}
            >
              <i className="ion-ios-play" />
            </div>
            <a className="media-card__footer" onClick={ () => this.setContent('artist_show', artist.id) }>{ artist.name }</a>
          </div>
        ))
      )
    }

    return (
      <div className="content__middle">
        <div id="artists">
          <div className="media-cards">
            {artistsContent}
          </div>
        </div>
      </div>
    )
  }
}

export default ArtistIndex;
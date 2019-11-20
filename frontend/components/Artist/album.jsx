import React from 'react';

import TrackItem from '../shared/track_item';

import * as SongApiUtil from '../../utils/song_api_util';

class ArtistAlbum extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      album: this.props.album,
      songs: []
    };

    SongApiUtil.fetchAlbumSongs(this.state.album.id).then(
      (data) => {
        this.setState({ songs: data });
      }
    )
  }

  render() {
    let songContent;
    const { album, songs } = this.state;

    songContent = (
      songs.map((song, index) => (
        <TrackItem song={ song } key={ song.id } />
      ))
    )

    return (
      <div className="album">
        <div className="album__info">
          <div className="album__info__art">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/whenDarkOut.jpg"
              alt={ album.name }
            />
          </div>
          <div className="album__info__meta">
            <div className="album__year">2015</div>
            <div className="album__name">
              { album.name }
            </div>
            <div className="album__actions">
              <button className="button-light save">
                Save
              </button>
              <button className="button-light more">
                <i className="ion-ios-more" />
              </button>
            </div>
          </div>
        </div>
        <div className="album__tracks">
          <div className="tracks">
            <div className="tracks__heading">
              <div className="tracks__heading__number">#</div>
              <div className="tracks__heading__title">Song</div>
              <div className="tracks__heading__length">
                <i className="ion-ios-stopwatch-outline" />
              </div>
              <div className="tracks__heading__popularity">
                <i className="ion-thumbsup" />
              </div>
            </div>
            {songContent}
          </div>
        </div>
      </div>
    )
  }
}

export default ArtistAlbum;
import React from 'react';
import { FormattedMessage } from 'react-intl';

import { AppContext } from '../app_provider';
import { constants } from '../../constants/constants';

import TrackItem from '../shared/track_item';

import * as AlbumApiUtil from '../../utils/album_api_util';
import * as SongApiUtil from '../../utils/song_api_util';

import AlbumItem from './_album';

class AlbumShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      album: {},
      songs: []
    };
  }

  componentDidMount() {
    const { match } = this.props;

    AlbumApiUtil.fetchAlbum(match.params.id).then(
      data => {
        this.setState({ album: data });
      }
    )

    SongApiUtil.fetchAlbumSongs(match.params.id).then(
      data => {
        this.setState({ songs: data });
      }
    )
  }

  playAlbum = album => {
    let globalContext = this.context;
    SongApiUtil.fetchAlbumSongs(album.id).then(
      data => {
        globalContext.currentQueue = data;
        globalContext.currentQueueType = constants.ALBUM;
        globalContext.currentQueueId = album.id;
        globalContext.currentQueueIndex = 0;
        globalContext.dispatch(constants.START);
      }
    )
  }

  render() {
    let globalContext = this.context;
    const { album, songs } = this.state;
    let songContent;
    let relatedAlbums;

    songContent = (
      songs.map((song, index) => (
        <TrackItem
          song={song}
          key={song.id}
          queue={songs}
          queueIndex={index}
          queueType={constants.ALBUM}
          queueId={album.id}
        />
      ))
    )

    return (
      <div className="content__middle">
        <div className="album is-verified">
          <div className="album__header">
            <div className="album__info">
              <div className="profile__img">
                <img
                  src={album.picture}
                  alt={album.name}
                />
              </div>
              <div className="album__info__meta">
                <div className="album__info__type">
                  <FormattedMessage
                    id="artist_show.album"
                    defaultMessage="album"
                  />
                </div>
                <div className="album__info__name">{album.name}</div>
                <div className="album__info__actions">
                  <button className="button-dark"
                    onClick={() => { this.playAlbum(album) }}>
                    <i className="ion-ios-play" />
                    <FormattedMessage
                      id="album_show.play"
                      defaultMessage="Play"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="album__content">
            <div className="tab-content">
              <div className="album">
                <div className="album__tracks">
                  <div className="tracks">
                    <div className="tracks__heading">
                      <div className="tracks__heading__number">#</div>
                      <div className="tracks__heading__title">
                        <FormattedMessage
                          id="album_show.song"
                          defaultMessage="Song"
                        />
                      </div>
                      <div className="tracks__heading__length">
                        <i className="ion-ios-contact" />
                      </div>
                      <div className="tracks__heading__popularity">
                        <i className="ion-ios-stopwatch" />
                      </div>
                    </div>
                    {songContent}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AlbumShow.contextType = AppContext;
export default AlbumShow;

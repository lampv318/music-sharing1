import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import { AppContext } from '../app_provider';
import { constants } from '../../constants/constants';

import TrackItem from '../shared/track_item';

import * as PlaylistApiUtil from '../../utils/playlist_api_util';
import * as AlbumApiUtil from '../../utils/album_api_util';
import * as SongApiUtil from '../../utils/song_api_util';

import PlaylistItem from './_playlist';

class PlaylistShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playlist: {},
      songs: []
    };
  }

  getPlaylist = playlistId => {
    PlaylistApiUtil.fetchPlaylist(playlistId).then(
      data => {
        this.setState({
          playlist: data,
          songs: data.songs,
        });
      }
    )
  }

  componentDidMount() {
    const { match } = this.props;
    this.getPlaylist(match.params.id)
  }

  playPlaylist = playlist => {
    let globalContext = this.context;
    globalContext.currentQueue = playlist.songs;
    globalContext.currentQueueType = constants.PLAYLIST;
    globalContext.currentQueueId = playlist.id;
    globalContext.currentQueueIndex = 0;
    globalContext.dispatch(constants.START);
  }

  render() {
    let globalContext = this.context;
    const { playlist, songs } = this.state;
    let songContent;

    songContent = (
      songs.map((song, index) => (
        <TrackItem
          song={song}
          key={song.id}
          queue={songs}
          queueIndex={index}
          queueType={constants.PLAYLIST}
          queueId={playlist.id}
        />
      ))
    )

    return (
      <div className="content__middle">
        <div className="playlist">
          <div className="playlist__header">
            <div className="playlist__info">
              <div className="playlist__info__meta">
                <div className="playlist__info__type">
                  <FormattedMessage
                    id="artist_show.playlist"
                    defaultMessage="playlist"
                  />
                </div>
                <div className="playlist__info__name">{playlist.name}</div>
                <div className="playlist__info__actions">
                  <button className="button-dark"
                    onClick={() => { this.playPlaylist(playlist) }}>
                    <i className="ion-ios-play" />
                    <FormattedMessage
                      id="playlist_show.play"
                      defaultMessage="Play"
                    />
                  </button>
                  <button className="button-light more">
                    <i className="ion-ios-more" />
                  </button>
                </div>
              </div>
            </div>
            <div className="playlist__navigation">
              <ul className="nav nav-tabs" role="tablist">
                <li role="presentation" className="active">
                  <a
                    href="#playlist-overview"
                    aria-controls="playlist-overview"
                    role="tab"
                    data-toggle="tab"
                  >
                    <FormattedMessage
                      id="playlist_show.overview"
                      defaultMessage="Overview"
                    />
                  </a>
                </li>
                <li role="presentation">
                  <a
                    href="#related-playlists"
                    aria-controls="related-playlists"
                    role="tab"
                    data-toggle="tab"
                  >
                    <FormattedMessage
                      id="playlist_show.related_playlists"
                      defaultMessage="Related Albums"
                    />
                  </a>
                </li>
              </ul>
              <div className="playlist__navigation__friends">
                <a href="#">
                  <img
                    src="http://cdn.devilsworkshop.org/files/2013/01/enlarged-facebook-profile-picture.jpg"
                    alt="true"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="playlist__content">
            <div className="tab-content">
              <div
                role="tabpanel"
                className="tab-pane active"
                id="playlist-overview"
              >
                <div className="overview">
                  <div className="overview__playlists">
                    <div className="playlist">
                      <div className="playlist__tracks">
                        <div className="tracks">
                          <div className="tracks__heading">
                            <div className="tracks__heading__number">#</div>
                            <div className="tracks__heading__title">
                              <FormattedMessage
                                id="playlist_show.song"
                                defaultMessage="Song"
                              />
                            </div>
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
                  </div>
                </div>
              </div>
              <div role="tabpanel" className="tab-pane" id="related-playlists">
                <div className="media-cards">
                  <div className="media-card">
                    <div
                      className="media-card__image"
                      style={{
                        backgroundImage:
                          'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/hoodie.jpg)'
                      }}
                    >
                      <i className="ion-ios-play" />
                    </div>
                    <a className="media-card__footer">Hoodie Allen</a>
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

PlaylistShow.contextType = AppContext;
export default PlaylistShow;

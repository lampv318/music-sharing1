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
                </div>
              </div>
            </div>
          </div>
          <div className="playlist__content">
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
    );
  }
}

PlaylistShow.contextType = AppContext;
export default PlaylistShow;

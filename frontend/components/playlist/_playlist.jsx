import React from 'react';
import { Link } from 'react-router-dom';

import { AppContext } from '../app_provider';
import { constants } from '../../constants/constants';

import * as PlaylistApiUtil from '../../utils/playlist_api_util';

class PlaylistItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playlist: {}
    };
  }

  getPlaylist = playlistId => {
    PlaylistApiUtil.fetchPlaylist(playlistId).then(
      data => {
        this.setState({
          playlist: data
        });
      }
    )
  }

  componentDidMount() {
    this.getPlaylist(this.props.playlist.id)
  }

  playPlaylist = playlist => {
    let globalContext = this.context;
    globalContext.currentQueue = playlist.songs;
    globalContext.currentQueueType = constants.PLAYLIST;
    globalContext.currentQueueId = playlist.id;
    globalContext.currentQueueIndex = 0;
    globalContext.dispatch(constants.START);
  }

  playButton = playlist => {
    let playButton;
    let globalContext = this.context;
    const { isPlaying, currentQueueId, currentQueueType } = globalContext;
    if (currentQueueId === playlist.id && currentQueueType === constants.PLAYLIST) {
      if (isPlaying === true) {
        playButton =
          <i className="ion-ios-pause"
             onClick={() => { globalContext.dispatch(constants.PAUSE) }} />
      } else {
        playButton =
          <i className="ion-ios-play"
             onClick={() => { globalContext.dispatch(constants.RESUME) }} />
      }
    } else {
      playButton =
        <i className="ion-ios-play"
           onClick={() => { this.playArtist(playlist) }} />
    }
    return playButton;
  }

  render() {
    const { playlist } = this.state;
    // console.log(playlist)
    return (
      <div className="media-card" key={playlist.id}>
        <div
          className="media-card__image"
          style={{ backgroundImage: ""}}
        >
          {this.playButton(playlist)}
        </div>
        <Link to={`/playlists/${playlist.id}`} className="media-card__footer">
          {playlist.name}
        </Link>
      </div>
    )
  }
}

PlaylistItem.contextType = AppContext;
export default PlaylistItem;
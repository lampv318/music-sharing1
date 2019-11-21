import React from 'react';
import { Link } from 'react-router-dom';

import { AppContext } from '../app_provider';
import { constants } from '../../constants/constants';

import * as SongApiUtil from '../../utils/song_api_util';

class ArtistItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artist: {}
    };
  }

  componentDidMount() {
    this.setState({
      artist: this.props.artist
    })
  }

  playArtist = artist => {
    let globalContext = this.context;
    SongApiUtil.fetchArtistSongs(artist.id).then(
      data => {
        globalContext.currentQueue = data;
        globalContext.currentQueueType = constants.ARTIST;
        globalContext.currentQueueId = artist.id;
        globalContext.currentQueueIndex = 0;
        globalContext.dispatch(constants.START);
      }
    )
  }

  playButton = artist => {
    let playButton;
    let globalContext = this.context;
    const { isPlaying, currentQueueId, currentQueueType } = globalContext;
    if (currentQueueId === artist.id && currentQueueType === constants.ARTIST) {
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
          onClick={() => { this.playArtist(artist) }} />
    }
    return playButton;
  }

  render() {
    const { artist } = this.state;

    return (
      <div className="media-card" key={artist.id}>
        <div
          className="media-card__image"
          style={{ backgroundImage: `url(${artist.picture})` }}
        >
          {this.playButton(artist)}
        </div>
        <Link to={`/artists/${artist.id}`} className="media-card__footer">
          {artist.name}
        </Link>
      </div>
    )
  }
}

ArtistItem.contextType = AppContext;
export default ArtistItem;

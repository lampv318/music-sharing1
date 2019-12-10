import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import { AppContext } from '../app_provider';
import { constants } from '../../constants/constants';


class TrackItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      song: this.props.song,
      queueIndex: this.props.queueIndex,
      queue: this.props.queue,
      queueType: this.props.queueType,
      queueId: this.props.queueId
    };
  }

  componentDidUpdate() {
    let totalHeight = $(window).height();
    let headerHeight = $('.header').outerHeight();
    let footerHeight = $('.current-track').outerHeight();
    let playlistHeight = $('.new_playlist').outerHeight();
    let nowPlaying = $('.playing').outerHeight();

    let navHeight = totalHeight - (headerHeight + footerHeight + playlistHeight + nowPlaying);
    let artistHeight = totalHeight - (headerHeight + footerHeight);

    $('.navigation').css('height', navHeight);
    $('.content__middle').css('height', artistHeight);

    if ($(window).width() <= 768) {
      $('.collapse').removeClass('in');
      $('.navigation').css('height', 'auto');
      $('.artist').css('height', 'auto');
    }

    if ($(window).width() > 768) {
      $('.collapse').addClass('in');
    }
  }

  setQueueAndPlay = () => {
    let globalContext = this.context;
    const { queue, queueType, queueId, queueIndex } = this.state;
    globalContext.currentQueueType = queueType;
    globalContext.currentQueue = queue;
    globalContext.currentQueueId = queueId;
    globalContext.currentQueueIndex = queueIndex;
    globalContext.dispatch(constants.START);
  }

  render() {
    const { song, queue, queueIndex, queueType } = this.state;
    let globalContext = this.context;
    let playButton;
    let track_no;
    track_no = song.track_no;
    if (queueType === constants.PLAYLIST) {
      track_no = song.index;
    }

    if (song.save_file) {
      if (song.id === globalContext.currentTrackId) {
        if (globalContext.isPlaying === true) {
          playButton =
            <a href="javascript:void(0)"
              onClick={() => globalContext.dispatch(constants.PAUSE)}>
              <div className="ion-ios-pause" id="track_item.pause"></div>
            </a>
        } else {
          playButton =
            <a href="javascript:void(0)"
              onClick={() => globalContext.dispatch(constants.RESUME)}>
              <div className="ion-ios-play" id="track_item.resume"></div>
            </a>
        }
      } else {
        playButton =
          <a href="javascript:void(0)"
            onClick={() => this.setQueueAndPlay()}>
            <div className="ion-ios-play" id="track_item.play"></div>
          </a>
      }
    }

    return (
      <div className="track" key={song.id}>
        <div className="track__number">{track_no}</div>
        <div className="track__added">
          {playButton}
        </div>
        <div className="track__title">{song.name}</div>
        <div className="track__artist">
          <Link to={`/artists/${song.artist_id}`}>
            {song.artist_name}
          </Link>
        </div>
        <div className="track__length">{song.duration} (s)</div>
      </div>
    )
  }
}

TrackItem.contextType = AppContext;
export default TrackItem;

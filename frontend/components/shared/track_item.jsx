import React from 'react';

import * as SongApiUtil from '../../utils/song_api_util';

class TrackItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      song: this.props.song,
      url: ''
    };
  }

  playAudio = (songId) => {
    SongApiUtil.fetchSong(songId).then(
      (data) => {
        var a = new Audio(data.file);
        a.play();
      }
    )
  }

  render() {
    const { song } = this.state;

    return (
      <div className="track" key={ song.id }>
        <div className="track__number">{ song.track_no }</div>
        <div className="track__added">
          { song.duration !== null &&
          <a href="javascript:void(0)" onClick={ () => this.playAudio(this.state.song.id) }>Play</a>
          }
        </div>
        <div className="track__title">{ song.name }</div>
        <div className="track__length">{ song.duration }</div>
      </div>
    )
  }
}

export default TrackItem;
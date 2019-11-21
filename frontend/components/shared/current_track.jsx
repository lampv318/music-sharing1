import React from 'react';

import { AppContext } from '../app_provider';
import { constants } from '../../constants/constants';
import { FormattedMessage } from 'react-intl';

class CurrentTrack extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let globalContext = this.context;
    let playButton;

    if (globalContext.isPlaying === true) {
      playButton = <a className="ion-ios-pause pause"
        onClick={() => globalContext.dispatch(constants.PAUSE)} />
    } else {
      playButton = <a className="ion-ios-play play"
        onClick={() => globalContext.dispatch(constants.RESUME)} />
    }

    return (
      <section className="current-track">
        <audio id="player" src="" ></audio>
        <div className="current-track__actions">
          <a className="ion-ios-skip-backward"
            onClick={() => { globalContext.dispatch(constants.PREV); }} />
          {playButton}
          <a className="ion-ios-skip-forward"
            onClick={() => { globalContext.dispatch(constants.NEXT); }} />
        </div>
        <div className="current-track__progress">
          <div className="current-track__progress__start"></div>
          <div className="current-track__progress__bar">
            <div id="song-progress" />
          </div>
          <div className="current-track__progress__finish"></div>
        </div>
        <div className="current-track__options">
          <span className="controls">
            <a href="#" className="control">
              <i className="ion-ios-menu" />
            </a>
            <a href="#" className="control">
              <i className="ion-ios-shuffle" />
            </a>
            <a href="#" className="control">
              <i className="fa fa-refresh" />
            </a>
            <a href="#" className="control volume">
              <i className="ion-ios-volume-high" />
              <div id="song-volume" />
            </a>
          </span>
        </div>
      </section>
    );
  }
}

CurrentTrack.contextType = AppContext;
export default CurrentTrack;

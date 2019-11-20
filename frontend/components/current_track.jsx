import React from "react";

class Currenttrack extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="current-track">
        <div className="current-track__actions">
          <a className="ion-ios-skip-backward" />
          <a className="ion-ios-play play" />
          <a className="ion-ios-skip-forward" />
        </div>
        <div className="current-track__progress">
          <div className="current-track__progress__start">0:01</div>
          <div className="current-track__progress__bar">
            <div id="song-progress" />
          </div>
          <div className="current-track__progress__finish">3:07</div>
        </div>
        <div className="current-track__options">
          <a href="#" className="lyrics">
            Lyrics
          </a>
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
            <a href="#" className="control devices">
              <i className="ion-ios-phone-portrait" />
              <span>Devices Available</span>
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

export default Currenttrack;
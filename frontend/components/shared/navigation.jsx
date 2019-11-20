import React from 'react';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }

  setContent = (newContent, id) => {
    this.props.setContent(newContent, id)
  }

  render() {
    return (
      <section className="navigation">
        <div className="navigation__list">
          <div
            className="navigation__list__header"
            href="#main"
          >
            Main
          </div>
          <div id="main">
            <a href="#" className="navigation__list__item">
              <i className="ion-ios-browsers" />
              <span>Browse</span>
            </a>
            <a href="#" className="navigation__list__item">
              <i className="ion-ios-people" />
              <span>Activity</span>
            </a>
            <a href="#" className="navigation__list__item">
              <i className="ion-ios-radio" />
              <span>Radio</span>
            </a>
          </div>
        </div>
        <div className="navigation__list">
          <div
            className="navigation__list__header"
            href="#yourMusic"
          >
            Your Music
          </div>
          <div id="yourMusic">
            <a href="#" className="navigation__list__item">
              <i className="ion-ios-musical-note" />
              <span>Songs</span>
            </a>
            <a href="#" className="navigation__list__item" onClick={ () => this.setContent('album_index', 0) }>
              <i className="ion-ios-musical-notes" />
              <span>Albums</span>
            </a>
            <a href="#" className="navigation__list__item" onClick={ () => this.setContent('artist_index', 0) } >
              <i className="ion-ios-person" />
              <span>Artists</span>
            </a>
          </div>
        </div>
        <div className="navigation__list">
          <div
            className="navigation__list__header"
            role="button"
            href="#playlists"
          >
            Playlists
          </div>
          <div id="playlists">
            <a href="#" className="navigation__list__item">
              <i className="ion-ios-musical-notes" />
              <span>Doo Wop</span>
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Navigation;
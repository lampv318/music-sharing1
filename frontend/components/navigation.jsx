import React from "react";

class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="navigation">
        <div className="navigation__list">
          <div
            className="navigation__list__header"
            role="button"
            data-toggle="collapse"
            href="#main"
            aria-expanded="true"
            aria-controls="main"
          >
            Main
          </div>
          <div className="collapse in" id="main">
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
            role="button"
            data-toggle="collapse"
            href="#yourMusic"
            aria-expanded="true"
            aria-controls="yourMusic"
          >
            Your Music
          </div>
          <div className="collapse in" id="yourMusic">
            <a href="#" className="navigation__list__item">
              <i className="ion-ios-musical-note" />
              <span>Songs</span>
            </a>
            <a href="#" className="navigation__list__item">
              <i className="ion-ios-musical-notes" />
              <span>Albums</span>
            </a>
            <a href="#" className="navigation__list__item">
              <i className="ion-ios-person" />
              <span>Artists</span>
            </a>
          </div>
        </div>
        <div className="navigation__list">
          <div
            className="navigation__list__header"
            role="button"
            data-toggle="collapse"
            href="#playlists"
            aria-expanded="true"
            aria-controls="playlists"
          >
            Playlists
          </div>
          <div className="collapse in" id="playlists">
            <a href="#" className="navigation__list__item">
              <i className="ion-ios-musical-notes" />
              <span>Doo Wop</span>
            </a>
            <a href="#" className="navigation__list__item">
              <i className="ion-ios-musical-notes" />
              <span>Pop Classics</span>
            </a>
            <a href="#" className="navigation__list__item">
              <i className="ion-ios-musical-notes" />
              <span>Love $ongs</span>
            </a>
            <a href="#" className="navigation__list__item">
              <i className="ion-ios-musical-notes" />
              <span>Hipster</span>
            </a>
            <a href="#" className="navigation__list__item">
              <i className="ion-ios-musical-notes" />
              <span>New Music Friday</span>
            </a>
            <a href="#" className="navigation__list__item">
              <i className="ion-ios-musical-notes" />
              <span>Techno Poppers</span>
            </a>
            <a href="#" className="navigation__list__item">
              <i className="ion-ios-musical-notes" />
              <span>Summer Soothers</span>
            </a>
            <a href="#" className="navigation__list__item">
              <i className="ion-ios-musical-notes" />
              <span>Hard Rap</span>
            </a>
            <a href="#" className="navigation__list__item">
              <i className="ion-ios-musical-notes" />
              <span>Pop Rap</span>
            </a>
            <a href="#" className="navigation__list__item">
              <i className="ion-ios-musical-notes" />
              <span>5 Stars</span>
            </a>
            <a href="#" className="navigation__list__item">
              <i className="ion-ios-musical-notes" />
              <span>Dope Dancin</span>
            </a>
            <a href="#" className="navigation__list__item">
              <i className="ion-ios-musical-notes" />
              <span>Sleep</span>
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Navigation;
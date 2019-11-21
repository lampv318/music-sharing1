import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import { constants } from '../../constants/constants';
import PlaylistItems from './playlist_items';

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
            href="#main"
          >
            <FormattedMessage
              id="navigation.main"
              defaultMessage="Main"
            />
          </div>
          <div id="main">
            <Link to="/" className="navigation__list__item">
              <i className="ion-ios-browsers" />
              <span>
                <FormattedMessage
                  id="navigation.browse"
                  defaultMessage="Browse"
                />
              </span>
            </Link>
            <Link to="/albums/" className="navigation__list__item">
              <i className="ion-ios-musical-notes" />
              <span>
                <FormattedMessage
                  id="navigation.albums"
                  defaultMessage="Albums"
                />
              </span>
            </Link>
            <Link to="/artists/" className="navigation__list__item">
              <i className="ion-ios-person" />
              <span>
                <FormattedMessage
                  id="navigation.artists"
                  defaultMessage="Artists"
                />
              </span>
            </Link>
          </div>
        </div>
        <PlaylistItems />
      </section>
    );
  }
}

export default Navigation;

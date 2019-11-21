import React from 'react';
import { Link } from 'react-router-dom';

import { FormattedMessage } from 'react-intl';

import { AppContext } from '../app_provider';
import { constants } from '../../constants/constants';

import * as UserApiUtil from '../../utils/user_api_util';
import * as PlaylistApiUtil from '../../utils/playlist_api_util';

class PlaylistItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playlists: []
    }
  }

  componentDidMount() {
    let globalContext = this.context;
    let currentUserId = globalContext.currentUserId;
    UserApiUtil.fetchCurrentUser().then(
      user => {
        PlaylistApiUtil.fetchUserPlaylists(user.id).then(
          playlists => {
            this.setState({
              playlists: playlists
            });
            globalContext.currentUserId = user.id;
          }
        )
      }
    )
  }

  render() {
    let playlistItems;
    let globalContext = this.context;
    const { playlists } = this.state;
    if (playlists.length > 0) {
      playlistItems = (
        playlists.map(playlist => (
          <Link to={`/playlists/${playlist.id}`}
            key={playlist.id}
            className="navigation__list__item"
          >
            <i className="ion-ios-musical-notes" />
            <span>{playlist.name}</span>
          </Link>
        ))
      )
    }

    return (
      <div className="navigation__list">
        <div
          className="navigation__list__header"
          role="button"
          href="#playlists"
        >
          <FormattedMessage
            id="navigation.playlists"
            defaultMessage="Playlists"
          />
        </div>

        <div id="playlists">
          {playlistItems}
        </div>
      </div>
    );
  }
}

PlaylistItems.contextType = AppContext;
export default PlaylistItems;

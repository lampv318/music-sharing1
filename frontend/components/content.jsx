import React, { Fragment } from 'react';
import { withRouter } from 'react-router';

import {
  Route,
  Link,
  Switch,
  Redirect,
} from 'react-router-dom'

import { constants } from '../constants/constants';

import * as MiscUtils from '../utils/misc_utils';

import Header from './shared/header';
import Navigation from './shared/navigation';
import Playlist from './shared/playlist';
import Playing from './shared/playing';
import CurrentTrack from './shared/current_track';

import CategoryIndex from './category/index';

import ArtistIndex from './artist/index';
import ArtistShow from './artist/show';

import AlbumIndex from './album/index';
import AlbumShow from './album/show';

import PlaylistShow from './playlist/show';

import SearchResult from './search/result';

class Content extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    MiscUtils.setWindowSize();
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      MiscUtils.setWindowSize();
    }
  }

  render() {
    const Artists = ({ match }) => (
      <Fragment>
        <Route exact path={`${match.url}`} component={ ArtistIndex } />
        <Route path={`${match.url}/:id`} component={ ArtistShow } />
      </Fragment>
    )

    const Albums = ({ match }) => (
      <Fragment>
        <Route exact path={`${match.url}`} component={ AlbumIndex } />
        <Route path={`${match.url}/:id`} component={ AlbumShow } />
      </Fragment>
    )

    return (
      <Fragment>
        <Header />
        <section className="content">
          <div className="content__left">
            <Navigation />
            <Playlist />
            <Playing />
          </div>
          <Switch>
            <Route exact path ="/" component={ CategoryIndex } />
            <Route path="/artists" component={ Artists } />
            <Route path="/albums" component={ Albums } />
            <Route path="/playlists/:id" component={ PlaylistShow } />
            <Route path="/search/:q" component={ SearchResult } />
            <Redirect from="*" to="/" />
          </Switch>
        </section>
        <CurrentTrack />
      </Fragment>
    );
  }
}

export default withRouter(Content);

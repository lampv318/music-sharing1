import React from 'react';

import Navigation from './shared/navigation';
import Playlist from './shared/playlist';
import Playing from './shared/playing';
import Social from './shared/social';

import ArtistIndex from './Artist/artist_index';
import ArtistShow from './Artist/artist_show';

import AlbumIndex from './Album/album_index';
import AlbumShow from './Album/album_show';

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: 'artist_index',
      artistId: 3,
      albumId: 1
    }
  }

  setContent = (newContent, id) => {
    this.setState({
      content: newContent
    });
    if (newContent === 'artist_show') {
      this.setState({
        artistId: id
      })
    }
    if (newContent === 'album_show') {
      this.setState({
        albumId: id
      })
    }
  }

  render() {
    let mainContent;

    if (this.state.content === 'artist_index') {
      mainContent = <ArtistIndex setContent={ this.setContent } />
    }

    if (this.state.content === 'artist_show') {
      mainContent = <ArtistShow artistId={ this.state.artistId } />
    }

    if (this.state.content === 'album_index') {
      mainContent = <AlbumIndex setContent={ this.setContent } />
    }

    if (this.state.content === 'album_show') {
      mainContent = <AlbumShow albumId={ this.state.albumId } />
    }

    return (
      <section className="content">
        <div className="content__left">
          <Navigation setContent={ this.setContent }/>
          <Playlist />
          <Playing />
        </div>
        {mainContent}
        <div className="content__right">
          <Social />
        </div>
      </section>
    );
  }
}

export default Content;
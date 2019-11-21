import React from 'react';
import { Link } from 'react-router-dom';

import { AppContext } from '../app_provider';
import { constants } from '../../constants/constants';

import * as SearchApiUtil from '../../utils/search_api_util';

import ArtistItem from '../artist/_artist';
import AlbumItem from '../album/_album';

class SearchResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: [],
      albums: [],
      songs: []
    }
  }

  componentDidMount() {
    const { match } = this.props;
    SearchApiUtil.fetchSearchResults(match.params.q).then(
      data => {
        this.setState({
          artists: data.artists,
          albums: data.albums,
          songs: data.songs
        })
      }
    )
  }

  render() {
    let artistsContent, albumsContent, songsContent;
    const { artists, albums, songs } = this.state;
    if (artists.length > 0) {
      artistsContent = (
        artists.map(artist => (
          <ArtistItem key={artist.id} artist={artist} />
        ))
      )
    }

    if (albums.length > 0) {
      albumsContent = (
        albums.map(album => (
          <AlbumItem key={album.id} album={album} />
        ))
      )
    }

    return (
      <div className="content__middle">
        <div id="artists">
          <div className="media-cards">
            {artistsContent}
          </div>
        </div>
        <div id="albums">
          <div className="media-cards">
            {albumsContent}
          </div>
        </div>
      </div>
    )
  }
}

export default SearchResult;

import React from 'react';

import * as ArtistApiUtil from '../../utils/artist_api_util';

import ArtistItem from './_artist';

class ArtistIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: [],
    };
  }

  componentDidMount() {
    ArtistApiUtil.fetchArtists().then(
      data => {
        this.setState({ artists: data });
      }
    )
  }

  render() {
    const { artists } = this.state;
    let artistsContent;

    if (artists.length > 0) {
      artistsContent = (
        artists.map(artist => (
          <ArtistItem key={artist.id} artist={artist} />
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
      </div>
    )
  }
}

export default ArtistIndex;

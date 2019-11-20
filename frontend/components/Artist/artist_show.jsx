import React from 'react';

import ArtistAlbum from './album';

import * as ArtistApiUtil from '../../utils/artist_api_util';
import * as AlbumApiUtil from '../../utils/album_api_util';
import * as SongApiUtil from '../../utils/song_api_util';

class ArtistShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artistId: this.props.artistId,
      artist: {},
      albums: [],
      songs: []
    };

    ArtistApiUtil.fetchArtist(this.state.artistId).then(
      (data) => {
        this.setState({ artist: data });
      }
    )

    AlbumApiUtil.fetchArtistAlbums(this.state.artistId).then(
      (data) => {
        this.setState({ albums: data });
      }
    )

    SongApiUtil.fetchArtistSongs(this.state.artistId).then(
      (data) => {
        this.setState({ songs: data });
      }
    )
  }

  render() {
    const { artist, albums, songs } = this.state;
    let albumsContent;
    let popularContent;
    let top5;
    let top10;

    if (albums.length > 0) {
      albumsContent = (
        <div className="overview__albums">
          <div className="overview__albums__head">
            <span className="section-title">Albums</span>
            <span className="view-type">
              <i className="fa fa-list list active" />
              <i className="fa fa-th-large card" />
            </span>
          </div>
          {
            albums.map(album => (
              <ArtistAlbum album={album} key={album.id} />
            ))
          }
        </div>
      )
    }

    if (songs.length > 0) {
      top5 = songs.slice(0, 5)
      top10 = songs.slice(0, 10)
      popularContent = (
        <div>
          <div className="tracks">
            {
              top5.map((song, index) => (
                <div className="track" key={ song.id }>
                  <div className="track__art">
                    <img
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/whenDarkOut.jpg"
                      alt="When It's Dark Out"
                    />
                  </div>
                  <div className="track__number">{ index + 1 }</div>
                  <div className="track__added">
                    <i className="ion-md-checkmark added" />
                  </div>
                  <div className="track__title">{ song.name }</div>
                  <div className="track__plays">147,544,165</div>
                </div>
              ))
            }
          </div>
          {
            top10.length > 5 &&
            <button className="show-more button-light">
              Show {top10.length - top5.length} More
            </button>
          }
        </div>
      )
    }

    return (
      <div className="content__middle">
        <div className="artist is-verified">
          <div className="artist__header">
            <div className="artist__info">
              <div className="profile__img">
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/g_eazy_propic.jpg"
                  alt={ artist.name }
                />
              </div>
              <div className="artist__info__meta">
                <div className="artist__info__type">Artist</div>
                <div className="artist__info__name">{ artist.name }</div>
                <div className="artist__info__actions">
                  <button className="button-dark">
                    <i className="ion-ios-play" />
                    Play
                  </button>
                  <button className="button-light">Follow</button>
                  <button className="button-light more">
                    <i className="ion-ios-more" />
                  </button>
                </div>
              </div>
            </div>
            <div className="artist__listeners">
              <div className="artist__listeners__count">15,662,810</div>
              <div className="artist__listeners__label">
                Monthly Listeners
              </div>
            </div>
            <div className="artist__navigation">
              <ul className="nav nav-tabs" role="tablist">
                <li role="presentation" className="active">
                  <a
                    href="#artist-overview"
                    aria-controls="artist-overview"
                    role="tab"
                    data-toggle="tab"
                  >
                    Overview
                  </a>
                </li>
                <li role="presentation">
                  <a
                    href="#related-artists"
                    aria-controls="related-artists"
                    role="tab"
                    data-toggle="tab"
                  >
                    Related Artists
                  </a>
                </li>
              </ul>
              <div className="artist__navigation__friends">
                <a href="#">
                  <img
                    src="http://cdn.devilsworkshop.org/files/2013/01/enlarged-facebook-profile-picture.jpg"
                    alt="true"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="artist__content">
            <div className="tab-content">
              <div
                role="tabpanel"
                className="tab-pane active"
                id="artist-overview"
              >
                <div className="overview">
                  <div className="overview__artist">
                    <div className="section-title">Latest Release</div>
                    <div className="latest-release">
                      <div className="latest-release__art">
                        <img
                          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/whenDarkOut.jpg"
                          alt="When It's Dark Out"
                        />
                      </div>
                      <div className="latest-release__song">
                        <div className="latest-release__song__title">
                          Drifting (Track Commentary)
                        </div>
                        <div className="latest-release__song__date">
                          <span className="day">4</span>
                          <span className="month">December</span>
                          <span className="year">2015</span>
                        </div>
                      </div>
                    </div>

                    <div className="section-title">Popular</div>
                    { popularContent }

                  </div>
                  <div className="overview__related">
                    <div className="section-title">Related Artists</div>
                    <div className="related-artists">
                      <a href="#" className="related-artist">
                        <span className="related-artist__img">
                          <img
                            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/hoodie.jpg"
                            alt="Hoodie Allen"
                          />
                        </span>
                        <span className="related-artist__name">
                          Hoodie Allen
                        </span>
                      </a>
                    </div>
                  </div>
                  {albumsContent}
                </div>
              </div>
              <div role="tabpanel" className="tab-pane" id="related-artists">
                <div className="media-cards">
                  <div className="media-card">
                    <div
                      className="media-card__image"
                      style={{
                        backgroundImage:
                          'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/hoodie.jpg)'
                      }}
                    >
                      <i className="ion-ios-play" />
                    </div>
                    <a className="media-card__footer">Hoodie Allen</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ArtistShow;
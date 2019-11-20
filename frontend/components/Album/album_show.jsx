import React from 'react';

import TrackItem from '../shared/track_item';

import * as AlbumApiUtil from '../../utils/album_api_util';
import * as SongApiUtil from '../../utils/song_api_util';

class AlbumShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      albumId: this.props.albumId,
      album: {},
      songs: []
    };

    AlbumApiUtil.fetchAlbum(this.state.albumId).then(
      (data) => {
        this.setState({ album: data });
      }
    )

    SongApiUtil.fetchAlbumSongs(this.state.albumId).then(
      (data) => {
        this.setState({ songs: data });
      }
    )
  }

  render() {
    const { album, songs } = this.state;
    let songContent;

    songContent = (
      songs.map(song => (
        <TrackItem song={ song } key={ song.id } />
      ))
    )

    return (
      <div className="content__middle">
        <div className="album is-verified">
          <div className="album__header">
            <div className="album__info">
              <div className="profile__img">
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/g_eazy_propic.jpg"
                  alt={ album.name }
                />
              </div>
              <div className="album__info__meta">
                <div className="album__info__type">Album</div>
                <div className="album__info__name">{ album.name }</div>
                <div className="album__info__actions">
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
            <div className="album__listeners">
              <div className="album__listeners__count">15,662,810</div>
              <div className="album__listeners__label">
                Monthly Listeners
              </div>
            </div>
            <div className="album__navigation">
              <ul className="nav nav-tabs" role="tablist">
                <li role="presentation" className="active">
                  <a
                    href="#album-overview"
                    aria-controls="album-overview"
                    role="tab"
                    data-toggle="tab"
                  >
                    Overview
                  </a>
                </li>
                <li role="presentation">
                  <a
                    href="#related-albums"
                    aria-controls="related-albums"
                    role="tab"
                    data-toggle="tab"
                  >
                    Related Albums
                  </a>
                </li>
              </ul>
              <div className="album__navigation__friends">
                <a href="#">
                  <img
                    src="http://cdn.devilsworkshop.org/files/2013/01/enlarged-facebook-profile-picture.jpg"
                    alt="true"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="album__content">
            <div className="tab-content">
              <div
                role="tabpanel"
                className="tab-pane active"
                id="album-overview"
              >
                <div className="overview">
                  <div className="overview__album">
                    <div className="section-title">Popular</div>
                    <div className="tracks">
                      <div className="track">
                        <div className="track__art">
                          <img
                            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/whenDarkOut.jpg"
                            alt="When It's Dark Out"
                          />
                        </div>
                        <div className="track__number">1</div>
                        <div className="track__added">
                          <i className="ion-md-checkmark added" />
                        </div>
                        <div className="track__title">Me, Myself & I</div>
                        <div className="track__explicit">
                          <span className="label">Explicit</span>
                        </div>
                        <div className="track__plays">147,544,165</div>
                      </div>
                    </div>
                    <button className="show-more button-light">
                      Show 5 More
                    </button>
                  </div>
                  <div className="overview__related">
                    <div className="section-title">Related Albums</div>
                    <div className="related-albums">
                      <a href="#" className="related-album">
                        <span className="related-album__img">
                          <img
                            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/hoodie.jpg"
                            alt="Hoodie Allen"
                          />
                        </span>
                        <span className="related-album__name">
                          Hoodie Allen
                        </span>
                      </a>
                    </div>
                  </div>

                  <div className="overview__albums">
                    <div className="album">
                      <div className="album__tracks">
                        <div className="tracks">
                          <div className="tracks__heading">
                            <div className="tracks__heading__number">#</div>
                            <div className="tracks__heading__title">Song</div>
                            <div className="tracks__heading__length">
                              <i className="ion-ios-stopwatch-outline" />
                            </div>
                            <div className="tracks__heading__popularity">
                              <i className="ion-thumbsup" />
                            </div>
                          </div>
                          {songContent}
                        </div>
                      </div>
                    </div>
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

export default AlbumShow;
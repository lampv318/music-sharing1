import React, { Fragment } from 'react';
import { FormattedMessage } from 'react-intl';

import { AppContext } from '../app_provider';
import { constants } from '../../constants/constants';

import ArtistAlbum from './_album';

import * as ArtistApiUtil from '../../utils/artist_api_util';
import * as AlbumApiUtil from '../../utils/album_api_util';
import * as SongApiUtil from '../../utils/song_api_util';

import ArtistItem from './_artist';
import AlbumItem from '../album/_album';

class ArtistShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artist: {},
      albums: [],
      songs: []
    };
  }

  playArtist = artist => {
    let globalContext = this.context;
    SongApiUtil.fetchArtistSongs(artist.id).then(
      data => {
        globalContext.currentQueue = data;
        globalContext.currentQueueType = constants.ARTIST;
        globalContext.currentQueueId = artist.id;
        globalContext.currentQueueIndex = 0;
        globalContext.dispatch(constants.START);
      }
    )
  }

  componentDidMount() {
    const { match } = this.props;

    ArtistApiUtil.fetchArtist(match.params.id).then(
      data => {
        this.setState({ artist: data });
      }
    )

    AlbumApiUtil.fetchArtistAlbums(match.params.id).then(
      data => {
        this.setState({ albums: data });
      }
    )

    SongApiUtil.fetchArtistSongs(match.params.id).then(
      (data) => {
        this.setState({ songs: data });
      }
    )
  }

  render() {
    const { artist, albums, songs } = this.state;
    let albumsContent;
    let songsContent;
    let contributedAlbums;
    let popularContent;
    let relatedArtists;
    let top5;
    let top10;
    let countlast5;

    if (albums.length > 0) {
      albumsContent = (
        <div className="overview__albums">
          <div className="overview__albums__head">
            <span className="section-title">
              <FormattedMessage
                id="artist_show.albums"
                defaultMessage="Albums"
              />
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

    if (artist.related && artist.related.length > 0) {
      relatedArtists = (
        artist.related.map(
          item => (
            <ArtistItem key={item.id} artist={item} />
          )
        )
      )
    }

    if (artist.contributed_albums && artist.contributed_albums.length > 0) {
      contributedAlbums = (
        <Fragment>
          <span className="section-title">
            <FormattedMessage
              id="artist_show.distrbuted_albums"
              defaultMessage="Appear on"
            />
          </span>
          <div className="media-cards">
            {
              artist.contributed_albums.map(
                item => (
                  <AlbumItem key={`cr-${item.id}`} album={item} />
                )
              )
            }
          </div>
        </Fragment>
      )
    }

    if (songs.length > 0) {
      top5 = songs.slice(0, 5)
      top10 = songs.slice(0, 10)
      countlast5 = top10.length - top5.length;
      popularContent = (
        <div>
          <div className="tracks">
            {
              top5.map((song, index) => (
                <div className="track" key={song.id}>
                  <div className="track__art">
                    <img
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/whenDarkOut.jpg"
                      alt="When It's Dark Out"
                    />
                  </div>
                  <div className="track__number">{index + 1}</div>
                  <div className="track__added">
                    <i className="ion-md-checkmark added" />
                  </div>
                  <div className="track__title">{song.name}</div>
                  <div className="track__plays">147,544,165</div>
                </div>
              ))
            }
          </div>
          {
            countlast5 > 0 &&
              <button className="show-more button-light">
                <FormattedMessage
                  id="artist_show.show_more"
                  defaultMessage="Show { last5 } More"
                  values={{ last5: countlast5 }}
                />
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
                  src={artist.cover}
                  alt={artist.name}
                />
              </div>
              <div className="artist__info__meta">
                <div className="artist__info__type">
                  <FormattedMessage
                    id="artist_show.artist"
                    defaultMessage="Artist"
                  />
                </div>
                <div className="artist__info__name">{artist.name}</div>
                <div className="artist__info__actions">
                  <button className="button-dark"
                    onClick={() => { this.playArtist(artist) }}>
                    <i className="ion-ios-play" />
                    <FormattedMessage
                      id="artist_show.play"
                      defaultMessage="Play"
                    />
                  </button>
                  <button className="button-light">
                    <FormattedMessage
                      id="artist_show.follow"
                      defaultMessage="Follow"
                    />
                  </button>
                  <button className="button-light more">
                    <i className="ion-ios-more" />
                  </button>
                </div>
              </div>
            </div>
            <div className="artist__listeners">
              <div className="artist__listeners__count">15,662,810</div>
              <div className="artist__listeners__label">
                <FormattedMessage
                  id="artist_show.monthly_listeners"
                  defaultMessage="Monthly Listeners"
                />
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
                    <FormattedMessage
                      id="artist_show.overview"
                      defaultMessage="Overview"
                    />
                  </a>
                </li>
                <li role="presentation">
                  <a
                    href="#related-artists"
                    aria-controls="related-artists"
                    role="tab"
                    data-toggle="tab"
                  >
                    <FormattedMessage
                      id="artist_show.related_artists"
                      defaultMessage="Related Artists"
                    />
                  </a>
                </li>
              </ul>
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
                  </div>
                  {albumsContent}
                </div>
                <div className="overview__albums">

                  {contributedAlbums}
                </div>
              </div>
              <div role="tabpanel" className="tab-pane" id="related-artists">
                <div className="media-cards">
                  {relatedArtists}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ArtistShow.contextType = AppContext;
export default ArtistShow;

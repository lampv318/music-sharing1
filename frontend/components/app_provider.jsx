import React from 'react';

import {constants} from '../constants/constants';

import * as UserApiUtil from '../utils/user_api_util';
import * as SongApiUtil from '../utils/song_api_util';
import * as ArtistApiUtil from '../utils/artist_api_util';
import * as AlbumApiUtil from '../utils/album_api_util';
import * as SearchApiUtil from '../utils/search_api_util';
import * as PlaylistApiUtil from "../utils/playlist_api_util";

const AppContext = React.createContext();

class AppProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTrackId: 0,
      currentTrackName: '',
      currentTrackArtist: '',
      currentTrackCoverUrl: '',
      currentTrackUrl: '',
      currentQueueType: '',
      currentQueueId: '',
      currentQueueIndex: 0,
      currentQueue: [],
      isPlaying: false,
      dispatch: this.dispatch,
    }
  }

  dispatch = (action_type) => {
    if (action_type === constants.START) {
      const {currentQueue, currentQueueIndex} = this.state;
      this.startAudio(currentQueue, currentQueueIndex);
    }

    if (action_type === constants.RESUME) {
      this.resumeAudio();
    }

    if (action_type == constants.PAUSE) {
      this.pauseAudio();
    }

    if (action_type == constants.STOP) {
      this.stopAudio();
    }

    if (action_type == constants.NEXT) {
      this.nextAudio();
    }

    if (action_type == constants.PREV) {
      this.prevAudio();
    }
  }

  getSong = () => {
    SongApiUtil.fetchAllSong().then(
      data => {
        this.setState({ songs: data });
      })
  }

  componentDidMount() {
    this.getSong()
  }

  startAudio = (queue, index) => {
    let track = queue[index];
    ArtistApiUtil.fetchArtist(track.artist_id).then(
      (artist) => {
        this.setState({
          currentTrackArtist: artist.name
        })
      }
    )
    AlbumApiUtil.fetchAlbum(track.album_id).then(
      (album) => {
        this.setState({
          currentTrackCoverUrl: album.picture
        })
      }
    )

    this.setState({
      currentTrackName: track.name,
      currentTrackUrl: track.save_file,
      currentQueueIndex: index
    })

    let player = document.getElementById('player');
    player.src = track.save_file;
    player.ontimeupdate = () => {
      let percent = (player.currentTime / player.duration) * 100;
      let progressbar =
        document.querySelector('#song-progress .noUi-origin');
      progressbar.style = 'left: ' + percent + '%;';
      let currentplayingdiv =
        document.querySelector('.current-track__progress__start');
      currentplayingdiv.innerText = Math.floor(player.currentTime);
      let currentpendingdiv =
        document.querySelector('.current-track__progress__finish');
      currentpendingdiv.innerText =
        Math.floor(player.duration - player.currentTime);
    }

    player.onended = () => {
      let progressbar =
        document.querySelector('#song-progress .noUi-origin');
      progressbar.style = 'left: 0%';
      if (queue[index + 1]) {
        this.startAudio(queue, index + 1);
      } else {
        this.setState({
          isPlaying: false
        })
      }
    }

    player.play();

    this.setState({
      currentTrackId: track.id,
      currentTrackDuration: track.duration,
      isPlaying: true
    });
  }

  resumeAudio = () => {
    if (this.state.isPlaying === false) {
      let player = document.getElementById('player');
      player.play();
      this.setState({
        isPlaying: true
      })
    }
  }

  pauseAudio = () => {
    let player = document.getElementById('player');
    player.pause()
    this.setState({
      isPlaying: false
    })
  }

  stopAudio = () => {
    let player = document.getElementById('player');
    player.pause();
    player.currentTime = 0;
    this.setState({
      isPlaying: false
    })
  }

  nextAudio = () => {
    let player = document.getElementById('player');
    const {currentQueue, currentQueueIndex} = this.state;
    if (currentQueue[currentQueueIndex + 1]) {
      this.startAudio(currentQueue, currentQueueIndex + 1);
    } else {
      this.stopAudio();
    }
  }

  prevAudio = () => {
    let player = document.getElementById('player');
    const {currentQueue, currentQueueIndex} = this.state;
    if (currentQueue[currentQueueIndex - 1]) {
      this.startAudio(currentQueue, currentQueueIndex - 1);
    } else {
      this.stopAudio();
    }
  }

  onSearch = () => {
    const {currentSearchString} = this.state;
    SearchApiUtil.fetchSearchResults(currentSearchString).then(
      (data) => {
        this.setState({
          currentSearchResultArtists: data.artists,
          currentSearchResultAlbums: data.albums,
          currentSearchResultSongs: data.songs
        })
      }
    )
  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}

export { AppContext };
export default AppProvider;

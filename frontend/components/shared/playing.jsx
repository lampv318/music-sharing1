import React from 'react';
import { Link } from 'react-router-dom';

import { AppContext } from '../app_provider';
import { constants } from '../../constants/constants';

class Playing extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let globalContext = this.context;
    const { currentQueueType, currentQueueId } = globalContext;

    let urlPrefix = (
      queueType => {
        switch(currentQueueType) {
          case constants.ALBUM:
            return "albums";
          case constants.PLAYLIST:
            return "playlists";
          case constants.ARTIST:
            return "artists"
        }
      }
    )(currentQueueType);

    if(globalContext.currentTrackId == 0){
      return (
        <section className="playing">
        </section>
      )
    }

    return (
      <section className="playing">
        <div className="playing__art">
          <Link to={`/${urlPrefix}/${currentQueueId}`} className="media-card__footer">
            <img
              src={globalContext.currentTrackCoverUrl}
              alt="Album Art"
            />
          </Link>
        </div>
        <div className="playing__song">
          <a className="playing__song__name">{globalContext.currentTrackName}</a>
          <a className="playing__song__artist">{globalContext.currentTrackArtist}</a>
        </div>
        <div className="playing__add">
          <i className="ion-md-checkmark" />
        </div>
      </section>
    );
  }
}

Playing.contextType = AppContext;
export default Playing;

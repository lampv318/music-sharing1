import React from 'react';

class Playlist extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="playlist">
        <a href="#">
          <i className="ion-ios-add-circle" />
          New Playlist
        </a>
      </section>
    );
  }
}

export default Playlist;
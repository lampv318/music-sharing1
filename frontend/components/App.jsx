import React from 'react';

import Header from './shared/header';
import Content from './content';
import CurrentTrack from './shared/current_track';

import 'bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTrackId: 0,
      currentTrackSeekTime: 0
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Content />
        <CurrentTrack />
      </div>
    );
  }
}

export default App;
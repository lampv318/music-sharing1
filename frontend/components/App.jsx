import React from 'react';

import Header from './header';
import Content from './content';
import Currenttrack from './current_track';

import 'bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
          <Header />
          <Content />
          <Currenttrack />
        </div>
    );
  }
}

export default App;
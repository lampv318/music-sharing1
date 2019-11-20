import React from 'react';

class Social extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="social">
        <div className="friends">
          <a href="#" className="friend">
            <i className="ion-md-person" />
            Sam Smith
          </a>
        </div>
        <button className="button-light">Find Friends</button>
      </div>
    );
  }
}
export default Social;
import React from 'react';
import { withRouter } from 'react-router';
import { FormattedMessage } from 'react-intl';

import * as UserApiUtil from '../../../utils/user_api_util';

class Loggin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {},
    }
  }

  componentDidMount() {
    UserApiUtil.fetchCurrentUser().then(
      data => {
        this.setState({
          currentUser: data
        })
      }
    )
  }

  handleClick() {
    UserApiUtil.fetchLogoutUser().then(
      this.props.history.push("login")
    )
  };

  render() {
    const { currentUser } = this.state;
    return (
      <section>
        <div className="user">
          <div className="user__notifications">
            <i className="ion-md-notifications" />
          </div>
          <div className="user__info">
            <span className="user__info__name">
              <span className="name">{currentUser.name}</span>
            </span>
          </div>
          <button onClick={() => { this.handleClick() }} >Log out</button>
        </div>
      </section>

    );
  }
}

export default withRouter(Loggin);
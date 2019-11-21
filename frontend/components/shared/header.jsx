import React from 'react';
import { withRouter } from 'react-router';
import { FormattedMessage } from 'react-intl';

import { constants } from '../../constants/constants';

import * as UserApiUtil from '../../utils/user_api_util';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {},
      searchString: ''
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

  onSearchSubmit = (e) => {
    e.preventDefault();
    const { searchString } = this.state;
    this.props.history.push(`/search/${searchString}`);
  }

  onSearchChange = (e) => {
    this.setState({ searchString: e.target.value })
  }

  render() {
    const { currentUser } = this.state;
    return (
      <section className="header">
        <div className="search">
          <FormattedMessage id="header.search" defaultMessage="Search">
            {msg => (
              <form onSubmit={this.onSearchSubmit.bind(this)} >
                <input
                  type="text"
                  value={this.state.searchString}
                  placeholder={msg}
                  onChange={this.onSearchChange.bind(this)}
                />
              </form>
            )}
          </FormattedMessage>
        </div>
        <div className="user">
          <div className="user__notifications">
            <i className="ion-md-notifications" />
          </div>
          <div className="user__info">
            <span className="user__info__name">
              <span className="name">{currentUser.name}</span>
            </span>
          </div>
          <div className="user__actions">
            <div className="dropdown">
              <button
                className="dropdown-toggle"
                type="button"
                id="dropdownMenu1"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="true"
              >
                <i className="ion-ios-arrow-down" />
              </button>
              <ul
                className="dropdown-menu dropdown-menu-right"
                aria-labelledby="dropdownMenu1"
              >
                <li>
                  <a href="/profile">
                    <FormattedMessage
                      id="header.profile"
                      defaultMessage="Profile"
                    />
                  </a>
                </li>

                <li>
                  <a href="/account">
                    <FormattedMessage
                      id="header.payment"
                      defaultMessage="Payment"
                    />
                  </a>
                </li>
                <li>
                  <a href="/logout">
                    <FormattedMessage
                      id="header.logout"
                      defaultMessage="Log Out"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default withRouter(Header);

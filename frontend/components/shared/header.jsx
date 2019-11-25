import React from 'react';
import { withRouter } from 'react-router';
import { FormattedMessage } from 'react-intl';

import { constants } from '../../constants/constants';

import * as UserApiUtil from '../../utils/user_api_util';
import {switcher} from "ionicons/icons";

import {
  Route,
  Link,
  Switch,
  Redirect,
} from 'react-router-dom'

import Logout from './header/logout';
import Loggin from  './header/loggin';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {},
      logged_in: true,
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
          <Switch>
            <Route exact path="/" component={ Loggin } />
            <Route path="/logout" component={ Logout } />
          </Switch>
        </div>
      </section>
    );
  }
}


export default withRouter(Header);

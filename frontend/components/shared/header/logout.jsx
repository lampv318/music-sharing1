import React from 'react';
import { withRouter } from 'react-router';
import { FormattedMessage } from 'react-intl';

import {switcher} from "ionicons/icons";
import {Switch} from "react-router-dom";

class Logout extends  React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>this is loggout</div>
    )
  }
}

export default Logout;
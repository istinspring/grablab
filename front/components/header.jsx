/* jshint esnext: true */
import React from 'react';
import { PropTypes } from 'react-router'
import { Link } from 'react-router'

import style from './style';
import AppBar from 'react-toolbox/lib/app_bar';
import Navigation from 'react-toolbox/lib/navigation';


class Header extends React.Component {
  constructor(props) {
    super(props);
    let self = this;
    const lang = props.lang;
    this.state = {
      actions: [
        {
          onClick: function() {
            console.log('click actions');
            return self.context.history.pushState(null, '/')
          },
          label: 'Home',
          kind: 'raised',
          icon: 'access-alarm'
        },
        {
          onClick: function() {
            console.log('click projects');
            return self.context.history
                  .pushState(null, lang + '/projects');
          },
          label: 'Projects',
          kind: 'raised',
          accent: true,
          icon: 'room'
        },
      ],

    }
  }

  render() {
    return (
      <AppBar className={style.appbar} flat>
        <Navigation type='horizontal'
                    actions={this.state.actions} />
      </AppBar>
    );
  }
}
Header.contextTypes = { history: PropTypes.history };

export default Header;

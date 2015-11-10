/* jshint esnext: true */
import React from 'react';
import { PropTypes } from 'react-router'
import { Link } from 'react-router'
// import history from './react-router/history'

import style from './style';
import AppBar from 'react-toolbox/lib/app_bar';
import {Tab, Tabs} from 'react-toolbox/lib/tabs';
import Navigation from 'react-toolbox/lib/navigation';
import Button from 'react-toolbox/lib/button';


class Header extends React.Component {
  constructor(props) {
    super(props);
    let self = this;
    console.log(props);
    const lang = props.lang;
    this.state = {
      navigationLinks: {
        home: lang,
        projects: lang + '/projects',
        contacts: lang + '/contacts',
        about: lang + '/about'
      },
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
    // <ul>
    //   <li><Link to={links.home}>Home</Link></li>
    //   <li><Link to={links.projects}>Projects</Link></li>
    //   <li><Link to={links.contacts}>Contacts</Link></li>
    //   <li><Link to={links.about}>About</Link></li>
    // </ul>

    const links = this.state.navigationLinks;
    console.log(this.props);
    console.log(this.state);
    return (
      <AppBar className={style.appbar} flat>
        <Navigation type='horizontal'
                    actions={this.state.actions} />
        <h1 className={style.title}>GrabLab</h1>
      </AppBar>
    );
  }
}
Header.contextTypes = { history: PropTypes.history };

export default Header;

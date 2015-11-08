/* jshint esnext: true */
import React from 'react';
import { Link } from 'react-router'


class Header extends React.Component {
  render() {
    const lang = this.props.lang;
    return (
      <nav>
        <ul>
          <li><Link to={lang}>Home</Link></li>
          <li><Link to={lang + '/projects'}>Projects</Link></li>
          <li><Link to={lang + '/contacts'}>Contacts</Link></li>
          <li><Link to={lang + '/about'}>About</Link></li>
        </ul>
      </nav>
    );
  };
}

export default Header;

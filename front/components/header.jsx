/* jshint esnext: true */
import React from 'react';
import { Link } from 'react-router'


class Header extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
        </ul>
      </nav>
    );
  };
}

export default Header;

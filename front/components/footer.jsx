/* jshint esnext: true */
import React from 'react';
import { Link } from 'react-router'

import style from './style';
import AppBar from 'react-toolbox/lib/app_bar';



class Footer extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <footer>
        <AppBar className={style.appbar} flat />
      </footer>
    );
  };
}

export default Footer;

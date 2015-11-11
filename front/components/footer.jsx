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
      <footer className={style['footer-container']}>
        <h2>Copyright 2008-2015 (c)</h2>
      </footer>
    );
  };
}

export default Footer;

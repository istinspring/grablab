/* jshint esnext: true */
import React from 'react';
import grid from 'flexboxgrid';

import style from './styles';
import Header from './../components/header';
import Footer from './../components/footer';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {lang: props.params.lang};
  }
  render() {
    return (
      <div>
        <Header lang={this.state.lang} />
        <div className={style.spacer}>
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  };
}
App.propTypes = { lang: React.PropTypes.string };
App.defaultProps = { lang: 'ru' };

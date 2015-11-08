/* jshint esnext: true */
import React from 'react';

import Header from './../components/header';
import Footer from './../components/footer';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {lang: props.params.lang};
  }

  render() {
    return (
      <div>
        <h1>App</h1>
        <Header lang={this.state.lang} />
        <hr />
        {this.props.children}
        <hr />
        <Footer />
      </div>
    );
  };
}
App.propTypes = { lang: React.PropTypes.string };
App.defaultProps = { lang: 'ru' };

export default App;

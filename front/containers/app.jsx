/* jshint esnext: true */
import React from 'react';

import Header from './../components/header';
import Footer from './../components/footer';


class App extends React.Component {
  render() {
    return (
      <div>
        <h1>App</h1>
        <Header />
        <hr />
        {this.props.children}
        <hr />
        <Footer />
      </div>
    );
  };
}

export default App;

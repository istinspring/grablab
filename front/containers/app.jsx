/* jshint esnext: true */
import React from 'react';
import Header from './../components/header';


class App extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div>
        <h1>App</h1>
        <Header />
        <hr />
        {this.props.children}
      </div>
    );
  };
}

export default App;

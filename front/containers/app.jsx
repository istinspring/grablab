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
        <Header />
        <h1>Home</h1>
      </div>
    );
  };
}

export default App;

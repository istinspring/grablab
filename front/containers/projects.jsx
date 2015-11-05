/* jshint esnext: true */
import React from 'react';
import Header from './../components/header';


class Projects extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div>
        <Header />
        <h1>Projects</h1>
      </div>
    );
  };
}

export default Projects;

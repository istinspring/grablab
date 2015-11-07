/* jshint esnext: true */
import React from 'react';
import ProjectsList from './../components/projectsBox';

class Projects extends React.Component {
  render() {
    return (
      <div>
        <h1>Projects</h1>
        <ProjectsList />
      </div>
    );
  };
}

export default Projects;

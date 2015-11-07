/* jshint esnext: true */
import React from 'react';
import { Link } from 'react-router'
import PROJECTS_TEST_DATA from './../redux/projects';


class ProjectsListItem extends React.Component {
  render() {
    return (
      <li>
        <b>{this.props.data.title}</b> - {this.props.data.summary}
      </li>
    );
  };
}


class ProjectsList extends React.Component {
  render() {
    let projects = PROJECTS_TEST_DATA;
    return (
      <ul>
        {projects.map(function(item) {
          return <ProjectsListItem key={item.id} data={item} />;
        })}
      </ul>
    );
  };
}

export default ProjectsList;

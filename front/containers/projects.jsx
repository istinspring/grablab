/* jshint esnext: true */
import React from 'react';
import ProjectsList from './../components/projectsBox';
import fetch from 'isomorphic-fetch';


export class ProjectsListPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Projects</h1>
        <ProjectsList />
      </div>
    );
  };
}

export class ProjectDetailsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {project: props.project};
  }

  componentDidMount() {
    let self = this;
    const _id = this.props.params.id;
    fetch('/api/projects/' + _id + '/').then(function(res) {
      return res.json();
    }).then(function(json) {
      self.setState({project: json});
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.project.title}</h1>
        <p>{this.state.project.description}</p>
      </div>
    )
  }
}

ProjectDetailsPage.propTypes = { project: React.PropTypes.object };
ProjectDetailsPage.defaultProps = { project: {} };

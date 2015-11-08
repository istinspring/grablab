/* jshint esnext: true */
import React from 'react';
import { Link } from 'react-router'
import fetch from 'isomorphic-fetch';


class ProjectsListItem extends React.Component {
  render() {
    const linkTo = '/projects/' + this.props.data.id;
    return (
      <li>
        <Link to={linkTo}>
          <b>{this.props.data.title}</b> - {this.props.data.summary}
        </Link>
      </li>
    );
  };
}


class ProjectsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {projects: props.projects};
  };

  componentDidMount() {
    // TODO: load initial data as 3-phase async fetch
    // https://github.com/rackt/redux/issues/99#issuecomment-112212639
    let self = this;
    fetch('/api/projects/').then(function(res) {
      return res.json();
    }).then(function(json) {
      self.setState({projects: json});
    });
  };

  render() {
    if (!this.state.projects.length) {
      return (<h3>Loading...</h3>);
    };
    return (
      <ul>
        {this.state.projects.map(function(item) {
          return <ProjectsListItem key={item.id} data={item} />;
        })}
      </ul>
    );
  };
}

ProjectsList.propTypes = { projects: React.PropTypes.array };
ProjectsList.defaultProps = { projects: [] };

export default ProjectsList;

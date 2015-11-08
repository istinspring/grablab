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
  render() {
    console.log(this.props);
    if (!this.props.data.length) {
      return (<h3>Loading...</h3>);
    };
    return (
      <ul>
        {this.props.data.map(function(item) {
          return <ProjectsListItem key={item.id} data={item} />;
        })}
      </ul>
    );
  };
}

export default ProjectsList;

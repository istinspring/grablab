/* jshint esnext: true */
import React from 'react';
import { Link } from 'react-router'
import fetch from 'isomorphic-fetch';


class ProjectsListItem extends React.Component {
  render() {
    const _id = this.props.data.id;
    const lang = this.props.lang;
    const linkTo = '/' + lang + '/projects/' + _id;
    return (
      <li>
        <Link to={linkTo}>
          <b>{this.props.data.title}</b> - {this.props.data.summary}
        </Link>
      </li>
    );
  };
}

export default class ProjectsList extends React.Component {
  render() {
    const lang = this.props.lang;
    const projectsList = this.props.data;
    return (
      <ul>
        {projectsList.map(
          function(item) {
            return <ProjectsListItem key={item.id}
                                     data={item}
                                     lang={lang} />
        })}
      </ul>
    );
  };
}

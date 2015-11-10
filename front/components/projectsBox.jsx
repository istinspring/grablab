/* jshint esnext: true */
import React from 'react';
import { Link } from 'react-router'
import fetch from 'isomorphic-fetch';

import { ListItem } from 'react-toolbox/lib/list';



class ProjectsListItem extends React.Component {
  render() {
    const _id = this.props.data.id;
    const lang = this.props.lang;
    const linkTo = '/' + lang + '/projects/' + _id;
    return (
      <Link to={linkTo}>
        <ListItem
          avatar='https://dl.dropboxusercontent.com/u/2247264/assets/m.jpg'
          caption={this.props.data.title}
          legend={this.props.data.summary}
        />
      </Link>
    );
  };
}

export default class ProjectsList extends React.Component {
  render() {
    const lang = this.props.lang;
    const projectsList = this.props.data;
    return (
      <div>
        {projectsList.map(
          function(item) {
            return <ProjectsListItem key={item.id}
                                     data={item}
                                     lang={lang} />
        })}
      </div>
    );
  };
}

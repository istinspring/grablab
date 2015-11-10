/* jshint esnext: true */
import React from 'react';
import style from './styles'
import grid from 'flexboxgrid';
import fetch from 'isomorphic-fetch';

import { List, ListSubHeader } from 'react-toolbox/lib/list';
import ProjectsList from './../components/projectsBox';
import ProjectDetails from './../components/projectDetails';


export class ProjectsListPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: props.projects,
      lang: props.lang
    };
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
    return (
      <div className={style.content}>
        <div className={grid.row}>
          <List selectable ripple>
            <ListSubHeader caption='Проекты' />
            <ProjectsList data={this.state.projects}
                          lang={this.state.lang} />
          </List>
        </div>
      </div>
    );
  };
}
ProjectsListPage.propTypes = {
  projects: React.PropTypes.array,
  lang: React.PropTypes.string
};
ProjectsListPage.defaultProps = {
  projects: [],
  lang: 'ru'
};


export class ProjectDetailsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project: props.project,
      lang: props.lang
    };
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
      <ProjectDetails data={this.state.project} />
    );
  }
}
ProjectDetailsPage.propTypes = {
  project: React.PropTypes.object,
  lang: React.PropTypes.string
};
ProjectDetailsPage.defaultProps = {
  project: {},
  lang: 'ru'
};

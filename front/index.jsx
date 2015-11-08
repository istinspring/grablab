import 'babel-core/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'

// site containers
import App from './containers/app';
import Home from './containers/home';
import { ProjectsListPage, ProjectDetailsPage } from './containers/projects';
import About from './containers/about';
import Contacts from './containers/Contacts';


// TODO: <Route path="*" component={NoMatch}/>
ReactDOM.render((
  <Router history={createBrowserHistory()}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/projects">
        <IndexRoute component={ProjectsListPage} />
        <Route path="/projects/:id" component={ProjectDetailsPage} />
      </Route>
      <Route path="/about" component={About} />
      <Route path="/contacts" component={Contacts} />
    </Route>
  </Router>
), document.getElementById('container'));

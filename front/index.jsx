import 'babel-core/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Redirect } from 'react-router'
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
    <Redirect from="/" to="/ru" />
    <Route path="/:lang" component={App}>
      <IndexRoute component={Home} />
      <Route path="/:lang/projects">
        <IndexRoute component={ProjectsListPage} />
        <Route path="/:lang/projects/:id" component={ProjectDetailsPage} />
      </Route>
      <Route path="/:lang/about" component={About} />
      <Route path="/:lang/contacts" component={Contacts} />
    </Route>
  </Router>
), document.getElementById('container'));

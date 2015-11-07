import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router'

// site containers
import App from './containers/app';
import Home from './containers/home';
import Projects from './containers/projects';
import About from './containers/about';
import Contacts from './containers/Contacts';


// TODO: <Route path="*" component={NoMatch}/>
ReactDOM.render((
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/projects" component={Projects} />
      <Route path="/about" component={About} />
      <Route path="/contacts" component={Contacts} />
    </Route>
  </Router>
), document.getElementById('container'));

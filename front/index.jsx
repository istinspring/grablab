import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router'
// site containers
// import { App, Projects } from './containers';
import App from './containers/app';
import Projects from './containers/projects';


// TODO: <Route path="*" component={NoMatch}/>
console.log('Starting App...');
ReactDOM.render((
  <Router>
    <Route path="/" component={App} />
    <Route path="/projects" component={Projects}/>
  </Router>
), document.getElementById('container'));
// ReactDOM.render(
//   <Header />, document.getElementById('container')
// );
console.log('App started!');

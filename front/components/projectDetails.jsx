/* jshint esnext: true */
import React from 'react';
import { Link } from 'react-router'
import fetch from 'isomorphic-fetch';


class ProjectDetails extends React.Component {
  render() {
    if (!this.props.data) {
      return (<h3>Loading...</h3>);
    };
    return (
      <div>
        <h1>{this.props.data.title}</h1>
        <p>{this.props.data.description}</p>
      </div>
    );
  };
}

export default ProjectDetails;

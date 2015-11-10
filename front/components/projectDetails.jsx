/* jshint esnext: true */
import React from 'react';
import { Link } from 'react-router'
import fetch from 'isomorphic-fetch';

import ProgressBar from 'react-toolbox/lib/progress_bar';


class ProjectDetails extends React.Component {
  render() {
    if (!this.props.data) {
      return (
        <ProgressBar type="circular" mode="indeterminate" />);
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

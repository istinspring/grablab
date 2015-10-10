import React from 'react';

let Component = React.createClass({
  render: function () {
    return (
      <p>Hello world</p>
    );
  },
});

window.onload = () => {
  React.render(
    <Component />,
    document.querySelector('#container')
  );
};

import React from 'react';
import ReactDOM from 'react-dom';


var HelloMessage = React.createClass({
  render: function() {
    return <div>Hello Grab!</div>;
  }
});


// function main () {
//     return React.render(<HelloMessage />, document.getElementById('#container'));
// }

ReactDOM.render(<HelloMessage />, document.getElementById('container'));

// module.export = main;

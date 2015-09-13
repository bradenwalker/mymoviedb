"use strict";

var React = require('react');

var Home = React.createClass({
  render: function() {
    return (
      <div className="jumbotron">
        <h1>My Movie DB</h1>
        <p>All Your Movies Are Belong To Us</p>
      </div>
    );
  }
});

module.exports = Home;
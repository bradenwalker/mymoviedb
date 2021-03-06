"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Home = React.createClass({
  render: function() {
    return (
      <div className="jumbotron">
        <h1>My Movie DB</h1>
        <p>A Database of My Personal Movie Collection</p>
        <Link to="movies" className="btn btn-default btn-lrg">See My Movies</Link>
      </div>
    );
  }
});

module.exports = Home;
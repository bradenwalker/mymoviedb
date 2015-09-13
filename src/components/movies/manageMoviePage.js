"use strict";

var React = require('react');
var MovieForm = require('./movieForm');

var ManageAuthorPage = React.createClass({
  getInitialState: function() {
    return {
      movie: { title: '', year: '', genre: '', actors: '', rating: '' }
    };
  },

  setMovieState: function(event) {
    var field = event.target.name;
    var value = event.target.value;
    this.state.movie[field] = value;
    return this.setState({movie: this.state.movie});
  },

  render: function() {
    return (
      <MovieForm 
        movie={this.state.movie} 
        onChange={this.setMovieState} />
    );
  }
});

module.exports = ManageAuthorPage;
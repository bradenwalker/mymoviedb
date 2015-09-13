"use strict";

var React = require('react');
var MovieApi = require('../../api/movieApi');
var MovieList = require('./movieList');

var MoviePage = React.createClass({
  getInitialState: function() {
    return {
      movies: []
    };
  },

  componentDidMount: function() {
    if (this.isMounted()) {
      this.setState({ movies: MovieApi.getAllMovies() });
    }
  },

  render: function() {
    return (
      <div>
        <h1>Movies</h1>
        <MovieList movies={this.state.movies} />
      </div>
    );
  }
});

module.exports = MoviePage;
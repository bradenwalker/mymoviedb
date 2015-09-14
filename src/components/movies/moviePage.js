"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var MovieStore = require('../../stores/movieStore');
var MovieActions = require('../../actions/movieActions');
var MovieList = require('./movieList');

var MoviePage = React.createClass({
  getInitialState: function() {
    return {
      movies: MovieStore.getAllMovies()
    };
  },

  componentWillMount: function() {
    MovieStore.addChangeListener(this._onChange);
  },

  //Clean up when this component is unmounted
  componentWillUnmount: function() {
    MovieStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState({ movies: MovieStore.getAllMovies() });
  },

  render: function() {
    return (
      <div>
        <h1>Movies</h1>
        <Link to="addMovie" className="btn btn-default">Add Movie</Link>
        <MovieList movies={this.state.movies} />
      </div>
    );
  }
});

module.exports = MoviePage;
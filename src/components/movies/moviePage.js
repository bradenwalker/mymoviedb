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
      movies: MovieStore.getAllMovies(),
      searchString: ''
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
        <h1>My Movies <Link to="addMovie" className="btn btn-default btn-sm">Add New Movie</Link></h1>
        <MovieList movies={this.state.movies} searchString={this.state.searchString} />
      </div>
    );
  }
});

module.exports = MoviePage;

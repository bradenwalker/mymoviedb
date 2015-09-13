"use strict";

var React = require('react');
var Router = require('react-router');
var MovieForm = require('./movieForm');
var MovieApi = require('../../api/movieApi');
var toastr = require('toastr');

var ManageAuthorPage = React.createClass({
  mixins: [
    Router.Navigation
  ],

  statics: {
    willTransitionFrom: function(transition, component) {
      if (component.state.dirty && !confirm('Leave without saving?')) {
        transition.abort();
      }
    }
  },

  getInitialState: function() {
    return {
      movie: { title: '', year: '', genre: '', actors: '', rating: '' },
      errors: {},
      dirty: false
    };
  },

  componentWillMount: function() {
    var movieId = this.props.params.id; //From the path '/movie:id'
    if (movieId){
      this.setState({movie: MovieApi.getMovieById(movieId)});
    }
  },

  setMovieState: function(event) {
    this.setState({dirty: true});
    var field = event.target.name;
    var value = event.target.value;
    this.state.movie[field] = value;
    return this.setState({movie: this.state.movie});
  },

  movieFormIsValid: function() {
    var formIsVaild = true;
    this.state.errors = {}; //Clear any previous errors

    if (this.state.movie.title.length < 2){
      this.state.errors.title = 'Title must be at least two characters long.';
      formIsVaild = false;
    }

    if (this.state.movie.year.length === 0){
      this.state.errors.year = 'Please enter a year.';
      formIsVaild = false;
    }

    if (this.state.movie.genre.length === 0){
      this.state.errors.genre = 'Please enter a genre.';
      formIsVaild = false;
    }

    if (this.state.movie.rating.length === 0){
      this.state.errors.rating = 'Please enter a rating.';
      formIsVaild = false;
    }

    this.setState({errors: this.state.errors});
    return formIsVaild;
  },

  saveMovie: function(event) {
    event.preventDefault();

    if(!this.movieFormIsValid()) {
      return;
    }

    MovieApi.saveMovie(this.state.movie);
    this.setState({dirty: false});
    toastr.success('Movie saved.');
    this.transitionTo('movies');
  },

  render: function() {
    return (
      <MovieForm 
        movie={this.state.movie} 
        onChange={this.setMovieState}
        onSave={this.saveMovie}
        errors={this.state.errors} />
    );
  }
});

module.exports = ManageAuthorPage;
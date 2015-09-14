"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var MovieApi = require('../api/movieApi');
var ActionTypes = require('../constants/actionTypes');

var MovieActions = {
  createMovie: function(movie) {
    var newMovie = MovieApi.saveMovie(movie);

    //Tells dispatcher to notify stores that a movie was created
    Dispatcher.dispatch({
      actionType: ActionTypes.CREATE_MOVIE,
      movie: newMovie
    });
  },

  updateMovie: function(movie) {
    var updatedMovie = MovieApi.saveMovie(movie);

    Dispatcher.dispatch({
      actionType: ActionTypes.UPDATE_MOVIE,
      movie: updatedMovie
    });
  },

  deleteMovie: function(id) {
    MovieApi.deleteMovie(id);

    Dispatcher.dispatch({
      actionType: ActionTypes.DELETE_MOVIE,
      id: id
    });
  }
};

module.exports = MovieActions;
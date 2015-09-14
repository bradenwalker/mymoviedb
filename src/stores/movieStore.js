"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var _ = require('lodash');
var CHANGE_EVENT = 'change';

var _movies = [];

var MovieStore = assign({}, EventEmitter.prototype, {
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  getAllMovies: function() {
    return _movies;
  },

  getMovieById: function(id) {
    return _.find(_movies, {id: id});
  }
});

Dispatcher.register(function(action) {
  switch(action.actionType) {
    case ActionTypes.INITIALIZE:
      _movies = action.initialData.movies;
      MovieStore.emitChange();
      break;

    case ActionTypes.CREATE_MOVIE:
      _movies.push(action.movie);
      MovieStore.emitChange();
      break;

    case ActionTypes.UPDATE_MOVIE:
      var existingMovie = _.find(_movies, {id: action.movie.id});
      var existingMovieIndex = _.indexOf(_movies, existingMovie);
      _movies.splice(existingMovieIndex, 1, action.movie);
      MovieStore.emitChange();
      break;

    case ActionTypes.DELETE_MOVIE:
      _.remove(_movies, function(movie) {
        return action.id === movie.id;
      });
      MovieStore.emitChange();
      break;

    default:
      //No op
  }
});

module.exports = MovieStore;
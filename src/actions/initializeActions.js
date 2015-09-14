"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var MovieApi = require('../api/movieApi');

var InitializeActions = {
  initApp: function() {
    Dispatcher.dispatch({
      actionType: ActionTypes.INITIALIZE,
      initialData: {
        movies: MovieApi.getAllMovies()
      }
    });
  }
};

module.exports = InitializeActions;
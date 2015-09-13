"use strict";

//This file is mocking a web API by hitting hard coded data.
var movies = require('./movieData').movies;
var _ = require('lodash');

//This would be performed on the server in a real app. Just stubbing in.
var _generateId = function(movie) {
  return movie.title.toLowerCase();
};

var _clone = function(item) {
  return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
};

var MovieApi = {
  getAllMovies: function() {
    return _clone(movies); 
  },

  getMovieById: function(id) {
    var movie = _.find(movies, {id: id});
    return _clone(movie);
  },
  
  saveMovie: function(movie) {
    //pretend an ajax call to web api is made here
    console.log('Pretend this just saved the movie to the DB via AJAX call...');
    
    if (movie.id) {
      var existingMovieIndex = _.indexOf(movies, _.find(movies, {id: movie.id})); 
      movies.splice(existingMovieIndex, 1, movie);
    } else {
      //Just simulating creation here.
      //The server would generate ids for new movies in a real app.
      //Cloning so copy returned is passed by value rather than by reference.
      movie.id = _generateId(movie);
      movies.push(movie);
    }

    return _clone(movie);
  },

  deleteMovie: function(id) {
    console.log('Pretend this just deleted the movie from the DB via an AJAX call...');
    _.remove(movies, { id: id});
  }
};

module.exports = MovieApi;
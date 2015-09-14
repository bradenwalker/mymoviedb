"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var MovieActions = require('../../actions/movieActions');
var toastr = require('toastr');

var MovieList = React.createClass({
  propTypes: {
    movies: React.PropTypes.array.isRequired
  },

  deleteMovie: function(id, event) {
    event.preventDefault();
    MovieActions.deleteMovie(id);
    toastr.success('Movie Deleted');
  },

  render: function() {
    var createMovieRow = function(movie) {
      return (
        <tr key={movie.id}>
          <td><a href="#" onClick={this.deleteMovie.bind(this, movie.id)} className="btn btn-warning">Delete</a></td>
          <td><Link to="manageMovie" params={{id: movie.id}}>{movie.title}</Link></td>
          <td>{movie.year}</td>
          <td>{movie.genre}</td>
          <td>{movie.actors}</td>
          <td>{movie.rating}</td>
        </tr>
      );
    };

    return (
      <div>
        <table className="table">
          <thead>
            <th></th>
            <th>Title</th>
            <th>Year</th>
            <th>Genre</th>
            <th>Actors</th>
            <th>Rating</th>
          </thead>
          <tbody>
            {this.props.movies.map(createMovieRow, this)}
          </tbody>
        </table>
      </div>
    );
  }
});

module.exports = MovieList;
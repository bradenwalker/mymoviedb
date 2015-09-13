"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var MovieList = React.createClass({
  propTypes: {
    movies: React.PropTypes.array.isRequired
  },
  render: function() {
    var createMovieRow = function(movie) {
      return (
        <tr key={movie.id}>
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
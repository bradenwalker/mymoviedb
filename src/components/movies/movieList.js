"use strict";

var React = require('react');

var MovieList = React.createClass({
  propTypes: {
    movies: React.PropTypes.array.isRequired
  },
  render: function() {
    var createMovieRow = function(movie) {
      return (
        <tr key={movie.id}>
          <td><a href={"/#movies/" + movie.id}>{movie.title}</a></td>
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
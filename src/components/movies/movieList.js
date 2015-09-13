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
          <td><a href={"/#movies/" + movie.id}>{movie.id}</a></td>
          <td>{movie.title}</td>
        </tr>
      );
    };

    return (
      <div>
        <table className="table">
          <thead>
            <th>ID</th>
            <th>Title</th>
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
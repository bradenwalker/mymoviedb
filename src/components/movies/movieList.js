"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var MovieActions = require('../../actions/movieActions');
var Input = require('../../components/common/textInput');
var toastr = require('toastr');


var MovieList = React.createClass({
  propTypes: {
    movies: React.PropTypes.array.isRequired
  },

  getInitialState: function() {
    return {searchString: ''};
  },

  deleteMovie: function(id, event) {
    event.preventDefault();
    MovieActions.deleteMovie(id);
    toastr.success('Movie Deleted');
  },

  handleChange: function(event) {
    this.setState({searchString: event.target.value});
  },

  compareSearch: function(movie) {
    if(movie.title.toLowerCase().indexOf(this.state.searchString.toLowerCase()) !== -1) {
      return true;
    } else if (movie.year.indexOf(this.state.searchString) !== -1) {
      return true;
    } else if (movie.genre.toLowerCase().indexOf(this.state.searchString.toLowerCase()) !== -1) {
      return true;
    } else if (movie.actors.toLowerCase().indexOf(this.state.searchString.toLowerCase()) !== -1) {
      return true;
    } else if (movie.rating.indexOf(this.state.searchString) !== -1) {
      return true;
    } else {
      return false;
    }
  },

  render: function() {
    var searchString = this.state.searchString;

    var createMovieRow = function(movie) {
      if (this.compareSearch(movie)) {
        return (
          <tr key={movie.id}>
            <td>{movie.title}</td>
            <td>{movie.year}</td>
            <td>{movie.genre}</td>
            <td>{movie.actors}</td>
            <td>{movie.rating}</td>
            <td><Link to="manageMovie" params={{id: movie.id}} className="btn btn-default btn-xs">Edit</Link></td>
            <td><a href="#" onClick={this.deleteMovie.bind(this, movie.id)} className="btn btn-default btn-xs">Delete</a></td>
          </tr>
        );
      } else {
        console.log("this.props: ", this.props);
      }
    };

    return (
      <div>
      <Input
          name="search"
          label="Search"
          ref="searchBar"
          placeholder="Filter by Title, Genre, Year, Actors, or Rating"
          value={searchString} 
          onChange={this.handleChange} />
        <table className="table">
          <thead>
            <th>Title</th>
            <th>Year</th>
            <th>Genre</th>
            <th>Actors</th>
            <th>Rating</th>
            <th></th>
            <th></th>
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
"use strict";

var React = require('react');
var Input = require('../common/textInput');

var MovieForm = React.createClass({
  propTypes: {
    movie: React.PropTypes.object.isRequired,
    onSave: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    errors: React.PropTypes.object
  },

  render: function() {
    return (
      <form>
        <h1>Manage Movie</h1>
        <Input
          name="title"
          label="Title"
          value={this.props.movie.title} 
          onChange={this.props.onChange}
          error={this.props.errors.title} />

        <Input
          name="year"
          label="Year"
          value={this.props.movie.year} 
          onChange={this.props.onChange}
          error={this.props.errors.year} />

        <Input
          name="genre"
          label="Genre"
          value={this.props.movie.genre} 
          onChange={this.props.onChange}
          error={this.props.errors.genre} />

        <Input
          name="actors"
          label="Actors"
          value={this.props.movie.actors} 
          onChange={this.props.onChange}
          error={this.props.errors.actors} />

        <Input
          name="rating"
          label="Rating"
          value={this.props.movie.rating} 
          onChange={this.props.onChange}
          error={this.props.errors.rating} />

        <input type="submit" value="Save" className="btn btn-default" onClick={this.props.onSave} />
      </form>                            
    );
  }
});

module.exports = MovieForm;
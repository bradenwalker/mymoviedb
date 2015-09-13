"use strict";

var React = require('react');
var Input = require('../common/textInput');

var MovieForm = React.createClass({
  render: function() {
    return (
      <form>
        <h1>Manage Movie</h1>
        <Input
          name="title"
          label="Title"
          value={this.props.movie.title} 
          onChange={this.props.onChange} />

        <Input
          name="year"
          label="Year"
          value={this.props.movie.year} 
          onChange={this.props.onChange} />

        <Input
          name="genre"
          label="Genre"
          value={this.props.movie.genre} 
          onChange={this.props.onChange} />

        <Input
          name="actors"
          label="Actors"
          value={this.props.movie.actors} 
          onChange={this.props.onChange} />

        <Input
          name="rating"
          label="Rating"
          value={this.props.movie.rating} 
          onChange={this.props.onChange} />

        <input type="submit" value="Save" className="btn btn-default" />
      </form>                            
    );
  }
});

module.exports = MovieForm;
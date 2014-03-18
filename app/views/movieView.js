var _ = require('underscore');
var Backbone = require("backbone");
var MovieView = Backbone.View.extend({
  template: _.template("\
      <h2><%= this.model.get('title') %></h2><hr/>\
      year: <%= this.model.get('year') %><br>\
      description: <%= this.model.get('description') %><br>\
  "),
  render: function() {
    this.$el.html(this.template(this));
    return this;
  }
});

module.exports = MovieView;

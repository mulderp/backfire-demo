var Backbone = require('backbone');

var MoviesView = Backbone.View.extend({
  el: "#movies",
  render: function() {
    var movies = this.collection.map(function(movie) {
      return "<li>" + movie.get('title') + "<a href='#movies/" + movie.id + "'>Show</a></li>";
    });
    this.$el.html(movies);
    return this;
  },
  initialize: function() {
    this.listenTo(this.collection, 'add', this.render);
    this.listenTo(this.collection, 'all', function(ev) { console.log(ev) });
  }
});
module.exports = MoviesView


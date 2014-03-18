var $             = require('jquery-untouched');
var _             = require('underscore');
var Backbone      = require('backbone');
Backbone.$        = $;

var Movies = require('collections/movies');
var moviesCollection = new Movies();

var MovieView = require('views/movieView');
var MoviesView = require('views/moviesView');

var MoviesRouter = Backbone.Router.extend({

  routes: {
    "movies/:id": "showMovie",
    "": "showAll",
  },

  showAll: function() {
    var movies = new MoviesView({collection: moviesCollection});
    movies.render();
  },

  showMovie: function(id) {
    var movie = moviesCollection.get(id);
    var movieView = new MovieView({el: "#details", model: movie});
    movieView.render();
  }

});



module.exports = {
    $: $,
    _: _,
    Backbone: Backbone,
    Router: MoviesRouter,
    collections: {
      movies: moviesCollection
    },
    views: {
      Movie: MovieView,
      Movies: MoviesView
    }
};

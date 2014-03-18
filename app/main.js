var $             = require('jquery-untouched');
var _             = require('underscore');
var Backbone      = require('backbone');
Backbone.$        = $;

var Movies = require('collections/movies');
var moviesCollection = new Movies();

var MovieView = require('views/movieView');
var MoviesView = require('views/moviesView');


module.exports = {
    $: $,
    _: _,
    Backbone: Backbone,
    collections: {
      movies: moviesCollection
    },
    views: {
      Movie: MovieView,
      Movies: MoviesView
    }
};

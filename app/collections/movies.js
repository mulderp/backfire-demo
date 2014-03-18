var Backbone      = require('backbone');
Backbone.Firebase = require('libs/backfire');

var Movies = Backbone.Firebase.Collection.extend({
  firebase: "https://movies-demo.firebaseio.com/movies"
});
module.exports = Movies

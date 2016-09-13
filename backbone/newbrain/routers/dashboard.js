var Backbone = require('backbone'),
    $ = require('jquery'),
    _ = require('underscore'),
    dashboardView = require('../views/dashboard/dashboard');


module.exports = Backbone.Router.extend({
  
  routes: {
    ':username/dashboard' : 'goDashboard'
  },
  
  initialize: function(){ 
  },
  
  goDashboard: function(username){
    return new dashboardView({username: username});
  }
});

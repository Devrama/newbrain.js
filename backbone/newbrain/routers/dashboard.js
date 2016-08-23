var Backbone = require('backbone'),
    $ = require('jquery'),
    _ = require('underscore'),
    dashboardView = require('../views/dashboard/dashboard');


module.exports = Backbone.Router.extend({
  
  routes: {
    ':username/dashboard' : 'goDashboard'
  },
  
  initialize: function(){ 
    var self = this;

    if(typeof window == 'undefined'){
    }
    else {
      $('body').on('click', '.bb-link', function(e){
        e && e.preventDefault();
        self.navigate($(this).attr('href'), { trigger: true, replace: true});
      });
    }
  },
  

  goDashboard: function(username){
    return new dashboardView({username: username});
  }
});

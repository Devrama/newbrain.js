var Backbone = require('backbone'),
    $ = require('jquery'),
    dashboardIndexView = require('../views/dashboard/dashboard');

var _dashboardIndexView = null;

module.exports = Backbone.Router.extend({
  
  routes: {
    '/:username/dashboard' : 'goDashboard'
  },
  
  initialize: function(){
    var self = this;
/*
    $('body').on('click', '.bb-link', function(e){
      e && e.preventDefault();
      self.navigate($(this).attr('href'), { trigger: true, replace: true});
    });
    */
  },
  

  goDashboard: function(username){
    if(!_dashboardIndexView)
      _dashboardIndexView = new dashboardIndexView();
    else
      _dashboardIndexView.initialize();

    _dashboardIndexView.once('nodeboned', function(ct){
      console.log(ct + 'nodedboned!!');
    });
  }
});

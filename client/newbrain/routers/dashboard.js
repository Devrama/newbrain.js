var Backbone = require('backbone'),
    dashboardView = require('../views/dashboard/index');

var _dashboardView = null;

module.exports = Backbone.Router.extend({
  
  routes: {
    '' : 'goDashboard',
    'edit/:number' : 'goEditor'
  },
  
  initialize: function(){
  },
  

  goDashboard: function(){
    if(!_dashboardView)
      _dashboardView = new dashboardView();
    else
      _dashboardView.initialize();
    
      
  },
  goEditor: function(number){
  }
});

var $ = require('jquery'),
    Backbone = require('backbone'),
    dashboardRouter = require('./routers/dashboard.js');

var _dashboardRouter = null;
$(function(){
	//load app-view.js which is a starting point of this app;
	_dashboardRouter = new dashboardRouter();
	Backbone.history.start({pushState: true, root: "/"});

  console.log('hello world!');
  console.log('hello wonjong!');
});

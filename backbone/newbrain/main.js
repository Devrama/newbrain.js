var $ = require('jquery'),
    Backbone = require('backbone'),
    dashboardRouter = require('./routers/dashboard.js');
    editorRouter = require('./routers/editor.js');

var _dashboardRouter = null,
    _editorRouter = null;

$(function(){
	//load app-view.js which is a starting point of this app;
	_dashboardRouter = new dashboardRouter();
	_editorRouter = new editorRouter();
	Backbone.history.start({pushState: true, root: "/"});

});

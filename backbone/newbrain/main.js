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

  if(typeof window !== 'undefined'){
    $('body').on('click', '.bb-link', function(e){
      e && e.preventDefault();
      _dashboardRouter.navigate($(this).attr('href'), { trigger: true, replace: true});
      _editorRouter.navigate($(this).attr('href'), { trigger: true, replace: true});
    });
  }

	Backbone.history.start({pushState: true, root: "/"});

});

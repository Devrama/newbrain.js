var Backbone = require('backbone'),
    $ = require('jquery'),
    editorIndexView = require('../views/editor/editor');

var _editorIndexView = null;

module.exports = Backbone.Router.extend({
  
  routes: {
    ':user_id/view/:number' : 'goEditor'
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
  
  goEditor: function(number){
    if(!_editorIndexView)
      _editorIndexView = new editorIndexView();
    else
      _editorIndexView.initialize();
    
  }
});

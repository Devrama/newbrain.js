var Backbone = require('backbone'),
    $ = require('jquery'),
    editorView = require('../views/editor/editor');

module.exports = Backbone.Router.extend({
  
  routes: {
    ':username/view/:docId' : 'goEditor'
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
  
  goEditor: function(username, docId){
    return new editorView({
      username: username,
      docId: docId
    });
  }
});

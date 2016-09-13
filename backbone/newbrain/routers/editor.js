var Backbone = require('backbone'),
    $ = require('jquery'),
    editorView = require('../views/editor/editor');

module.exports = Backbone.Router.extend({
  
  routes: {
    ':username/view/:docId' : 'goEditor'
  },
  
  initialize: function(){
  },
  
  goEditor: function(username, docId){
    return new editorView({
      username: username,
      docId: docId
    });
  }
});

var $ = require('jquery'),
    Backbone = require('backbone'),
    ejs = require('ejs-browser-async');
    Nodebone = require('../../helper/nodebone');

module.exports = Nodebone.View.extend({

  container: null,
  username: null,
  docId: null,

  className: 'editor',

  events: {
  },
  
  initialize: function(options){
    //$('#hello').html(this.$el.html('welcome dashboard'));
    var self = this;
    
    setTimeout(function(){

      ejs.renderSmart(
        {
          client: '/js/templates/editor/editor.ejs',
          server: __dirname + '/../templates/editor/editor.ejs'
        },
        {
          username: self.username,
          docId: self.docId
        },
        function(err, rendered){
          if(!err){
            if(typeof window !== 'undefined'){
              self.$el.html(rendered);
              $('#newbrain-render').html(self.el);
            }
            else {
              self.emit('nodeboned', rendered);
            }

          }
          else {
            //todo error
            self.emit('nodeboned', rendered);
          }
        }
      );
    }, 300);
  },
  
  render: function() {
    return this;
  },
  
});


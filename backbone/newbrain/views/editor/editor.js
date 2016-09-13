var $ = require('jquery'),
    Backbone = require('backbone'),
    ejs = require('../../helper/ejs_extended');
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
        'editor/editor',
        {
          username: self.username,
          docId: self.docId
        },
        function(err, rendered){
          if(!err){
            self.emit('nodeboned', rendered);
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


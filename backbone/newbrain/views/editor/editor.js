var ejs = require('ejs'),
    $ = require('jquery'),
    Backbone = require('backbone'),
    ejsRender = require('../../helper/render_ejs');
    Nodebone = require('../../helper/nodebone');

module.exports = Nodebone.View.extend({

  username: null,
  docId: null,

  className: 'editor',

  events: {
  },
  
  initialize: function(options){
    //$('#hello').html(this.$el.html('welcome dashboard'));
    var self = this;
    
    setTimeout(function(){

      ejsRender.render(
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


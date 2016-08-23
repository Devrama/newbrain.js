var ejs = require('ejs'),
    $ = require('jquery'),
    _ = require('underscore'),
    Backbone = require('backbone'),
    ejsRender = require('../../helper/render_ejs');
    Nodebone = require('../../helper/nodebone');

module.exports = Nodebone.View.extend({

  username: null,

  className: 'dashboard',

  events: {
  },
  
  initialize: function(options){
    _.extend(this, options);
    
    //$('#hello').html(this.$el.html('welcome dashboard'));
    var self = this;

    setTimeout(function(){

      ejsRender.render(
        'dashboard/dashboard',
        {
          username: self.username
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


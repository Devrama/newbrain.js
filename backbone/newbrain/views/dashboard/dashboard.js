var $ = require('jquery'),
    _ = require('underscore'),
    Backbone = require('backbone'),
    ejs = require('../../helper/ejs_extended');
    Nodebone = require('../../helper/nodebone');

module.exports = Nodebone.View.extend({

  container: null,
  username: null,

  className: 'dashboard',

  events: {
  },
  
  initialize: function(options){
    _.extend(this, options);
    
    //$('#hello').html(this.$el.html('welcome dashboard'));
    var self = this;

    setTimeout(function(){

      ejs.renderSmart(
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


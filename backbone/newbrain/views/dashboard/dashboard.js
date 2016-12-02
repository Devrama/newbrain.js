var $ = require('jquery'),
    _ = require('underscore'),
    Backbone = require('backbone'),
    ejs = require('ejs-browser-async');
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
        {
          client: '/js/templates/dashboard/dashboard.ejs',
          server: __dirname + '/../templates/dashboard/dashboard.ejs'
        },
        {
          username: self.username
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


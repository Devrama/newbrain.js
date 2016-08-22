var ejs = require('ejs'),
    $ = require('jquery'),
    Backbone = require('backbone');


module.exports = Backbone.View.extend({

  className: 'dashboard',

  events: {
  },
  
  initialize: function(){
    $('#hello').html(this.$el.html('welcome backbone'));
  },
  
   render: function() {
    return this;
  },
  
});


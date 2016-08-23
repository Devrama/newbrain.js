var ejs = require('ejs'),
    $ = require('jquery'),
    Backbone = require('backbone');


module.exports = Backbone.View.extend({

  className: 'editor',

  events: {
  },
  
  initialize: function(){
    $('#hello').html(this.$el.html('welcome editor'));
  },
  
  render: function() {
    return this;
  },
  
});


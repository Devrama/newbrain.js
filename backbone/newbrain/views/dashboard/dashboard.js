var ejs = require('ejs'),
    $ = require('jquery'),
    Backbone = require('backbone'),
    Nodebone = require('../../helper/nodebone');;
var ct = 0;
module.exports = Nodebone.View.extend({

  className: 'dashboard',

  events: {
  },
  
  initialize: function(){
    //$('#hello').html(this.$el.html('welcome dashboard'));
    var self = this;
    setTimeout(function(){
      self.emit('nodeboned', ++ct);
    }, 100);
    console.log('emit nodeboned');
  },
  
  render: function() {
    return this;
  },
  
});


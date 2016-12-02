var _ = require('underscore'),
    util = require('util'),
    Backbone = require('backbone');

var eventEmitter = null;
var NodeView = null;
//Running on node.js
if(typeof window == 'undefined'){
  eventEmitter = require('events').EventEmitter;
  NodeView = function(obj, options){
    _.extend(this, obj);
    _.extend(this, options);
    if(typeof this.initialize == 'function'){
      this.initialize();
    }
  };

  util.inherits(NodeView, eventEmitter);
}

var nodebone = {};
module.exports = nodebone;

nodebone.View = {};
nodebone.View.extend = function(obj){
  //Running on node.js
  if(NodeView !== null){
    return function(options){
      return new NodeView(obj, options);
    };
  }
  else {
    obj.constructor = function(options){
      _.extend(this, options);
      _.extend(this, {emit: function(){}});
      Backbone.View.apply(this, arguments);
    };
    return Backbone.View.extend(obj);
  }
};



var _ = require('underscore'),
    util = require('util'),
    Backbone = require('backbone');

var eventEmitter = null;
var NodeView = null;
//Running on node.js
if(typeof module !== 'undefined' && module.exports){
  eventEmitter = require('events').EventEmitter;
  NodeView = function(obj){
    _.extend(this, obj);
    if(typeof this.initialize == 'function'){
      console.log('yes I have initialize');
      this.initialize();
    }
  };

  util.inherits(NodeView, eventEmitter);
  console.log('Emitter inheritted');
}

var nodebone = {};
module.exports = nodebone;

nodebone.View = {};
nodebone.View.extend = function(obj){
  //Running on node.js
  if(NodeView !== null){
    return function(){
      return new NodeView(obj);
    };
  }
  else {
    return Backbone.View.extend(obj);
  }
};



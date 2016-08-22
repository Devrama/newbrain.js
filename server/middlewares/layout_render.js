var ejs = require('ejs'),
    fs = require('fs'),
    path = require('path');

var favicon = require('serve-favicon');
/**
 * Insert the provided 'view' templated block into 
 * index template.
 */
var renderIndex = function(){
  return function( req, res, next ) {
    var _render = res.render;
    res.renderIndex = function( view, options, fn ) {
      var self = this;

      ejs.renderFile(
        path.join(__dirname, '../views/', view + '.ejs'),
        options,
        function(err, result){
          if(!err){
            options.bodyBlock = result;

            if(!options.metaTitle) options.metaTitle = '';
            if(!options.metaDescription) options.metaDescription = '';
            if(!options.metaKeywords) options.metaKeywords = '';

            _render.call( self, 'index', options, fn );
          }
          else {
            throw err;
          }
        }
      );
    }

    next();
  };
};

module.exports = {
  renderIndex: renderIndex 
};

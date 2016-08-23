var ejs = require('ejs'),
    fs = require('fs'),
    path = require('path');

/**
 * Insert the provided 'view' templated block into 
 * layout template.
 * Call res.render{layout template name}();
 * i.g. res.renderIndex, res.renderDashboard
 */
var renderLayout = function(layout){
  return function( req, res, next ) {
    var _render = res.render;
    var ucfirstLayout = layout;
    ucfirstLayout = ucfirstLayout.toLowerCase();
    ucfirstLayout = ucfirstLayout.charAt(0).toUpperCase() + ucfirstLayout.slice(1)

    res['render'+ucfirstLayout] = function( view, options, fn ) {
      var self = this;

      ejs.renderFile(
        path.join(__dirname, '../views/', view + '.ejs'),
        options,
        function(err, result){
          if(!err){
            options.bodyBlock = result;

            _render.call( self, layout, options, fn );
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
  renderLayout: renderLayout 
};

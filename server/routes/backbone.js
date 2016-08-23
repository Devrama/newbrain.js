var express = require('express'),
    ejs = require('ejs'),
    dashboardRouter = require('../../backbone/newbrain/routers/dashboard'),
    editorRouter = require('../../backbone/newbrain/routers/editor');

var router = express.Router();

var _dashboardRouter = new dashboardRouter();
var _editorRouter = new editorRouter();

generateBackboneRoute('dashboard', _dashboardRouter);
generateBackboneRoute('editor', _editorRouter);




function generateBackboneRoute(layoutTemplate, backboneRouter){
  for(var route in backboneRouter.routes){
    var funcName = backboneRouter.routes[route];
    router.get('/'+route, function(req, res, next) {
      var args = [];
      for(var key in req.params){
        args.push(req.params[key]);
      }

      var objView = backboneRouter[funcName].apply(null, args);;

      objView.once('nodeboned', function(textRendered){
        res.render(
          layoutTemplate,
          { 
            bodyBlock: textRendered
          }
        );
      });
    });
  }
}

module.exports = router;

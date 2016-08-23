var express = require('express'),
    ejs = require('ejs'),
    dashboardRouter = require('../../backbone/newbrain/routers/dashboard'),
    editorRouter = require('../../backbone/newbrain/routers/editor');

var router = express.Router();

var _dashboardRouter = new dashboardRouter();
var _editorRouter = new editorRouter();

for(var route in _dashboardRouter.routes){
  var funcName = _dashboardRouter.routes[route];
  router.get(route, function(req, res, next) {
    var args = [];
    for(var key in req.params){
      args.push(req.params[key]);
    }
    _dashboardRouter[funcName].apply(null, args);;
    res.send('hello');
  });
}

/**
router.get('/:username/view/:docId', function(req, res, next) {
  res.renderIndex(
    'backbone_shared/layouts/editor',
    { 
      title: 'my editor',
      username: req.params.username,
      docId: req.params.docId 
    }
  );
});
**/

module.exports = router;

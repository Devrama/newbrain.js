var express = require('express'),
    ejs = require('ejs');
var router = express.Router();

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

module.exports = router;

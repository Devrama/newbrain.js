var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:username/view/:docId', function(req, res, next) {
  res.render(
    'client_shared/layouts/editor',
    { 
      username: req.params.username,
      docId: req.params.docId 
    }
  );
});

module.exports = router;

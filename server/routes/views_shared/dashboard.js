var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:username/dashboard', function(req, res, next) {
  res.render(
    'client_shared/layouts/dashboard',
    { 
      username: req.params.username
    }
  );
});

module.exports = router;

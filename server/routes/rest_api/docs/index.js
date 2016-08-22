var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  var obj = {
    a:1,
    b:2,
    c:3
  };
  res.json(obj);
});

module.exports = router;

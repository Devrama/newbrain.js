var express = require('express');
var router = express.Router();

router.get('/:docId', function(req, res, next) {
  var obj = {
    docId: req.params.docId,
    content: 'hello world wonjong!!'
  };

  res.json(obj);
});

router.post('/:docId', function(req, res, next) {
  var obj = { docId: req.params.docId };
  res.json(obj);
});

router.put('/:docId', function(req, res, next) {
  var obj = { docId: req.params.docId };
  res.json(obj);
});

router.delete('/:docId', function(req, res, next) {
  var obj = { docId: req.params.docId };
  res.json(obj);
});

module.exports = router;

var express = require('express');
var router = express.Router();

var routesDoc = require('./doc/index'),
    routesDocs = require('./docs/index');

router.use('/api/doc', routesDoc);
router.use('/api/docs', routesDocs);

module.exports = router;

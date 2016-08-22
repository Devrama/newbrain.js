var express = require('express');
var router = express.Router();

var routesDoc = require('./doc/index'),
    routesDocs = require('./docs/index');

router.use('/doc', routesDoc);
router.use('/docs', routesDocs);

module.exports = router;

var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  req.nextApp.render(req, res, '/admin/index');
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.render('src/user/index', { title: 'Express' });
});

module.exports = router;
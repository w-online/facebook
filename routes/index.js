var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('src/index/index', { title: 'Express' });
});

// register page
router.post('/reg', function (req, res) {
  var result = {msg:'注册成功'}
  res.send(result);
});

// forgot password page
router.post('/fp', function (req, res) {
  var result = {msg:'注册成功'}
  res.send(result);
});

module.exports = router;
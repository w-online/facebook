var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.render('src/user/index', { title: 'Express' });
});

// check whether current user is logined or not.
router.get('/auth', function (req, res) {
  if ( req.session && req.session.loggedIn ) {
    res.send(200);
  } else {
    res.send(401);
  }
});

module.exports = router;
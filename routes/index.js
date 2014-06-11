var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Account = require('../models/Account')(mongoose);
mongoose.connect('mongodb://localhost/facebook');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('src/index/index', { title: 'Express' });
});

// check whether current user is logined or not.
router.get('/auth', function (req, res) {
  if ( req.session && req.session.loggedIn ) {
    res.send(200);
  } else {
    res.send(401);
  }
});

// register page
router.post('/reg', function (req, res) {
  var email = req.param('email', '');
  var password = req.param('password', '');

  Account.register(email, password);
  res.send({status: 200, msg: '注册成功'});
});

// login 
router.post('/login', function (req, res) {
  var email = req.param('email', '');
  var password = req.param('password', '');

  Account.login(email, password, function (success) {
    if (!success) {
      res.send(401);
      return;
    }
    console.log('login was successful');
    req.session.loggedIn = true;
    res.send({status: 200, msg: '登录成功'});
  });
});

// forgot password page
router.post('/fp', function (req, res) {
  var hostname = req.headers.host;
  var email = req.param('email', '');
  var resetPasswordUrl = 'http://' + hostname + '/rp';
  Account.forgotPassword(email, resetPasswordUrl, function (success) {
    if (success) {
      res.send({status: 200});
    } else {
      res.send({status: 404});
    }
  });
});

// reset password page-
router.get('/rp', function (req, res) {
  var accountId = req.param('account', '');
  res.render('src/index/resetPassword', {accountId: accountId});
});

// reset password submit 
router.post('/rp', function (req, res) {
  var accountId = req.param('accountId', '');
  var password = req.param('password', '');
  Account.changePassword(accountId, password);
  res.render('src/index/resetPasswordSuccess');
});

module.exports = router;
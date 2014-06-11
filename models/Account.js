module.exports = function(mongoose) {
  var crypto = require('crypto');

  var nodemailer = require('nodemailer');
  var mail = require('../config/mail');

  var AccountSchema = new mongoose.Schema({
    email:     { type: String, unique: true },
    password:  { type: String },
    name: {
      first:   { type: String },
      last:    { type: String }
    },
    birthday: {
      day:     { type: Number, min: 1, max: 31, required: false },
      month:   { type: Number, min: 1, max: 12, required: false },
      year:    { type: Number }
    },
    photoUrl:  { type: String },
    biography: { type: String }
  });

  var Account = mongoose.model('Account', AccountSchema);

  var registerCallback = function(err) {
    if (err) {
      return console.log(err);
    };
    return console.log('Account was created');
  };

  var changePassword = function(accountId, newpassword) {
    var shaSum = crypto.createHash('sha256');
    shaSum.update(newpassword);
    var hashedPassword = shaSum.digest('hex');
    Account.update({_id:accountId}, {$set: {password: hashedPassword}},{upsert:false},
      function changePasswordCallback(err) {
        console.log('Change password done for account ' + accountId);
    });
  };

  var forgotPassword = function(email, resetPasswordUrl, callback) {
    var user = Account.findOne({email: email}, function findAccount(err, user){
      if (err) {
        // Email address is not a valid user
        callback(false);
      } else {
        var smtpTransport = nodemailer.createTransport('SMTP', mail);
        resetPasswordUrl += '?account=' + user._id;
        smtpTransport.sendMail({
          from: '735806789@qq.com',
          to: user.email,
          subject: 'Facebook Password Request',
          html: 'Click here to reset your password: <a href="' + resetPasswordUrl + '" title="' + resetPasswordUrl + '">' + resetPasswordUrl +'</a>'
        }, function forgotPasswordResult(err) {
          if (err) {
            callback(false);
          } else {
            callback(true);
          }
        });
      }
    });
  };

  var login = function(email, password, callback) {
    var shaSum = crypto.createHash('sha256');
    shaSum.update(password);
    Account.findOne({email:email,password:shaSum.digest('hex')},function(err, user){
      callback(null != user);
    });
  };

  var register = function(email, password) {
    var shaSum = crypto.createHash('sha256');
    shaSum.update(password);

    console.log('Registering ' + email);
    var user = new Account({
      email: email,
      password: shaSum.digest('hex')
    });
    user.save(registerCallback);
    console.log('Save command was sent');
  };

  return {
    register: register,
    forgotPassword: forgotPassword,
    changePassword: changePassword,
    login: login,
    Account: Account
  }
}

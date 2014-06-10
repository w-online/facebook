define(['text!tpl/forgotpassword/forgotpassword.html'], function (forgotpasswordTpl) {
  var ForgotpasswordView = Backbone.View.extend({
    el: $('#index'),
    events: {
      'submit form': 'forgotpassword'
    },
    initialize: function () {
      this.render();
    },
    render: function () {
      this.$el.html(forgotpasswordTpl);
    },
    forgotpassword: function () {
      var email = $('input[name="email"]').val();

      var forgotpasswordModel = new ForgotpasswordModel({email: email});
      Backbone.sync('create', forgotpasswordModel, {
        success: function (data) {
          console.log(data);
        },
        error: function (e) {
          console.log(e);
        }
      });
      return false;
    }
  });

  var ForgotpasswordModel = Backbone.Model.extend({
    urlRoot: '/fp',
    initialize: function (attrs) {
      this.set(attrs);
    }
  });

  return ForgotpasswordView;
});
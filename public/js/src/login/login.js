define(['text!tpl/login/login.html'], function (loginTpl) {
  var LoginView = Backbone.View.extend({
    el: $('#index'),
    events: {
      "submit form": "login"
    },
    initialize: function () {
      this.render();
    },
    render: function () {
      this.$el.html(loginTpl);
    },
    login: function () {
      var email = $('input[name="email"]').val(),
        password = $('input[name="password"]').val();

      var user = new LoginModel({email: email, password: password});
      Backbone.sync('create', user, {
        success: function (data) {
          location.reload();
        }
      });
      return false;
    }
  });

  var LoginModel = Backbone.Model.extend({
    urlRoot: '/login',
    initialize: function (attrs) {
      this.set(attrs);
    }
  });

  return LoginView;
});
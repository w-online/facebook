define(['text!tpl/register/register.html'], function (registerTpl) {
  var RegisterView = Backbone.View.extend({
    el: '#index',
    events: {
      "submit form": "register"
    },
    initialize: function () {
      this.render();
    },
    render: function () {
      this.$el.html(registerTpl);
    },
    register: function () {
      var email = $('input[name="email"]').val(),
        password = $('input[name="password"]').val();

      var user = new RegisterModel({email: email, password: password});
      Backbone.sync('create', user, {
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

  var RegisterModel = Backbone.Model.extend({
    urlRoot: '/reg',
    initialize: function (attrs) {
      this.set(attrs);
    }
  });

  return RegisterView;
});
define(['text!tpl/login/login.html'], function (loginTpl) {
  var LoginView = Backbone.View.extend({
    el: $('#index'),
    initialize: function () {
      this.render();
    },
    render: function () {
      this.$el.html(loginTpl);
    }
  });

  return LoginView;
});
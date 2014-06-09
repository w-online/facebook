define(['text!tpl/profile/profile.html'], function (profileTpl) {
  var ProfileView = Backbone.View.extend({
    el: $('#user'),
    initialize: function () {
      this.render();
    },
    render: function () {
      this.$el.html(profileTpl);
    }
  });

  return ProfileView;
});
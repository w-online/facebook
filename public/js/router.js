define(['src/profile/profile', 'src/login/login'], function (ProfileView, LoginView) {
  var Router = Backbone.Router.extend({
    currentView: null,
    routes: {
      profile: 'profile',
      login: 'login'
    },
    changeView: function (view) {
      if(null !== this.currentView) {
        this.currentView.undelegateEvents();
      }
      this.currentView = view;
      this.currentView.render();
    },
    profile: function () {
      this.changeView(new ProfileView);
    },
    login: function () {
      this.changeView(new LoginView);
    }
  });

  return new Router;
});
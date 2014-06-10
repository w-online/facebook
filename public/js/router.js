define(['src/profile/profile', 'src/login/login', 'src/register/register', 'src/forgotpassword/forgotpassword'], function (ProfileView, LoginView, RegisterView, ForgotpasswordView) {
  var Router = Backbone.Router.extend({
    currentView: null,
    routes: {
      profile: 'profile',
      login: 'login',
      reg: 'register',
      forgotpassword: 'forgotpassword'
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
    },
    register: function () {
      this.changeView(new RegisterView);
    },
    forgotpassword: function () {
      this.changeView(new ForgotpasswordView);
    }
  });

  return new Router;
});
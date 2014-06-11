define(['src/login/login', 'src/register/register', 'src/forgotpassword/forgotpassword', 'src/index/index'], function (LoginView, RegisterView, ForgotpasswordView, IndexView) {
  var Router = Backbone.Router.extend({
    currentView: null,
    routes: {
      login: 'login',
      reg: 'register',
      forgotpassword: 'forgotpassword',
      index: 'index'
    },
    changeView: function (view) {
      if(null !== this.currentView) {
        this.currentView.undelegateEvents();
      }
      this.currentView = view;
      this.currentView.render();
    },
    index: function () {
      this.changeView(new IndexView);
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
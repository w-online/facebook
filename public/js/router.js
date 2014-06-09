define(['src/profile/profile'], function (ProfileView) {
  var Router = Backbone.Router.extend({
    currentView: null,
    routes: {
      profile: 'profile'
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
    }
  });

  return new Router;
});
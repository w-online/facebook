define(['src/profile/profile', 'src/noMatch/noMatch'], function (ProfileView, noMatchView) {
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
    },
    noMatch: function () {
      this.changeView(new noMatchView);
    }
  });

  return new Router;
});
define(['router'], function (Router) {
  function checkLogin (callback) {
    $.ajax('/u/auth', {
      method: "GET",
      success: function() {
        return callback(true);
      },
      error: function(data) {
        return callback(false);
      }
    });
  }

  function runApplication (authenticated) {
    if (!authenticated) {
      window.location.hash = 'login';
    } else {
      window.location.hash = 'index';
    }
    Backbone.history.start();
  }

  return function () {
    checkLogin(runApplication);
  };
});
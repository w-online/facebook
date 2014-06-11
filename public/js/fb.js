define(['router'], function (Router) {
  function checkLogin (callback) {
    $.ajax('/auth', {
      method: "GET",
      success: function() {
          callback(true);
      },
      error: function () {
        callback(false);
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
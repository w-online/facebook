require.config({
  paths: {
    backbone: '/js/lib/backbone',
    underscore: '/js/lib/underscore',
    jquery: '/js/lib/jquery',
    text: '/js/lib/require-text',
    domReady: '/js/lib/domReady',
    tpl: '/tpl'
  },
  shim: {
    backbone: ['underscore', 'jquery'],
    fb: ['backbone']
  }
});

require(['domReady!', 'fb'], function (doc, fb) {
  fb();
});


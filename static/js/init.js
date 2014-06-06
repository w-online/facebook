require.config({
  paths: {
    lib: '/js/lib',
    src: '/js/src',
    tpl: '/tpl'
  },
  shim: {
    'lib/backbone': ['lib/underscore', 'lib/jquery'],
    'main': ['lib/backbone']
  }
});

require(['lib/domReady!', 'main'], function (doc, main) {
  main();
});


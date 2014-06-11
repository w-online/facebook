define(['text!tpl/index/index.html'], function (indexTpl) {
  var IndexView = Backbone.View.extend({
    el: $('#index'),
    initialize: function () {
      this.render();
    },
    render: function () {
      this.$el.html(indexTpl);
    }
  });
  return IndexView;
});
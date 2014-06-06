define(['lib/text!tpl/noMatch.html'], function (noMatchTpl) {
   var noMatchView = Backbone.View.extend({
     el: $('#content'),
     render: function () {
       this.$el.html(noMatchTpl);
     }
   });

   return noMatchView;
});
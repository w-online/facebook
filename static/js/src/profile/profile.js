define(['lib/text!tpl/profile.html'], function (profileTpl) {
   var ProfileView = Backbone.View.extend({
     el: $('#content'),
     render: function () {
       this.$el.html(profileTpl);
     }
   });

   return ProfileView;
});
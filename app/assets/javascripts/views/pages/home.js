Portfolio.Views.Home = Backbone.View.extend({

  template: JST['pages/home'],

  render: function () {
    this.$el.html("")
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    return this;
  }

});

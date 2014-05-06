Portfolio.Views.Research = Backbone.View.extend({

  template: JST['pages/research'],

  render: function () {
    this.$el.html("")
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    return this;
  }

});

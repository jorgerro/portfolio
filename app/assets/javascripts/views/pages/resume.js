Portfolio.Views.Resume = Backbone.View.extend({

  template: JST['pages/resume'],

  render: function () {
    this.$el.html("")
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    return this;
  }

});

Portfolio.Views.Projects = Backbone.View.extend({

  template: JST['pages/projects'],

  render: function () {
    this.$el.html("")
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    return this;
  }

});

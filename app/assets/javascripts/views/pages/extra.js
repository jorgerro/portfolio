Portfolio.Views.Extra = Backbone.View.extend({

  template: JST['pages/extra'],

  render: function () {
    this.$el.html("")
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    return this;
  }

});

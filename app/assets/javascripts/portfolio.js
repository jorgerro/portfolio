window.Portfolio = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new Portfolio.Routers.PagesRouter({
      $rootEl: $("#content")
    });
    Backbone.history.start();
  }
};


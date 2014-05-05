Portfolio.Routers.PagesRouter = Backbone.Router.extend({

  initialize: function (options) {
    this.$rootEl = options.$rootEl
  },

  routes: {
    "": "home",
    "projects": "projects"
  },

  home: function () {
    var homeView = new Portfolio.Views.Home();
    this.swapView(homeView);
  },

  projects: function () {
    var projectsView = new Portfolio.Views.Projects();
    this.swapView(projectsView);
  },

  swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view
    this.$rootEl.html(view.render().$el)
  }


});

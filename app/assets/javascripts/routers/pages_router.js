Portfolio.Routers.PagesRouter = Backbone.Router.extend({

  initialize: function (options) {
    this.$rootEl = options.$rootEl
  },

  routes: {
    "": "home",
    "projects": "projects",
    "resume": "resume",
    "research": "research",
    "extra": "extra"
  },

  home: function () {
    var homeView = new Portfolio.Views.Home();
    this.swapView(homeView);
  },

  projects: function () {
    var projectsView = new Portfolio.Views.Projects();
    this.swapView(projectsView);
  },

  resume: function () {
    var resumeView = new Portfolio.Views.Resume();
    this.swapView(resumeView);
  },

  research: function () {
    var researchView = new Portfolio.Views.Research();
    this.swapView(researchView);
  },

  extra: function () {
    var extraView = new Portfolio.Views.Extra();
    this.swapView(extraView);
  },

  swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view
    this.$rootEl.html(view.render().$el)
  }


});

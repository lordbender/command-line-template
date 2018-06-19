/* eslint-disable class-methods-use-this */
const PhotosRoutes = require("./photos").PhotosRoutes;

class Routes {
  constructor(baseRoute, app) {
    this.baseRoute = baseRoute;
    this.app = app;
  }
  init() {
    new PhotosRoutes(this.baseRoute, this.app).init();
  }
}

module.exports.Routes = Routes;

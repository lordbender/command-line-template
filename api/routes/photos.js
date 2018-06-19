/* eslint-disable class-methods-use-this */

class PhotosRoutes {
  constructor(baseRoute, app) {
    this.baseRoute = baseRoute;
    this.app = app;
  }
  init() {
    this.app.get(`${this.baseRoute}/photos`, (req, res) => res.json([]));
    this.app.get(`${this.baseRoute}/photos/:id`, (req, res) =>
      res.json({ id: req.params.id })
    );
  }
}

module.exports.PhotosRoutes = PhotosRoutes;

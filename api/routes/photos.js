/* eslint-disable class-methods-use-this */
const { PhotosServcie } = require("../services/photosService");

class PhotosRoutes {
  constructor(baseRoute, app) {
    this.baseRoute = baseRoute;
    this.app = app;
    this.photosServcie = new PhotosServcie();
  }
  init() {
    this.app.get(`${this.baseRoute}/photos`, async (req, res) =>
      res.json(await this.photosServcie.list())
    );
    this.app.get(`${this.baseRoute}/photos/:id`, async (req, res) =>
      res.json(await this.photosServcie.get(req.params.id))
    );
  }
}

module.exports.PhotosRoutes = PhotosRoutes;

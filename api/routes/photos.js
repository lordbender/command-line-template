/* eslint-disable class-methods-use-this */
const { PhotosService } = require("../services/photosService");

class PhotosRoutes {
  constructor(baseRoute, app) {
    this.baseRoute = baseRoute;
    this.app = app;
    this.photosService = new PhotosService();
  }
  init() {
    this.app.get(`${this.baseRoute}/photos`, async (req, res) =>
      res.json(await this.photosService.list())
    );

    this.app.get(`${this.baseRoute}/photos/:id`, async (req, res) =>
      res.json(await this.photosService.getById(req.params.id))
    );
  }
}

module.exports.PhotosRoutes = PhotosRoutes;

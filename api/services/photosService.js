const { BaseService } = require("./baseService");

class PhotosService extends BaseService {
  async list() {
    return await this.get("https://jsonplaceholder.typicode.com/photos");
  }

  async getById(id) {
    return await this.get(`https://jsonplaceholder.typicode.com/photos/${id}`);
  }
}

module.exports.PhotosService = PhotosService;

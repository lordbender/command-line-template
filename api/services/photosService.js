const { BaseService } = require("./baseService");

class PhotosServcie extends BaseService {
  async list() {
    return await this.get("http://jsonplaceholder.typicode.com/photos");
  }

  async get(id) {
    return await this.get(`http://jsonplaceholder.typicode.com/photos/${id}`);
  }
}

module.exports.PhotosServcie = PhotosServcie;

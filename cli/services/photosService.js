import axios from "axios";

export default class PhotosService {
  constructor() {
    const { API_URL } = process.env;
    this.apiUrl = "http://localhost:3001/api/v1";
  }

  async list() {
    axios.get(`${this.apiUrl}/photos`);
  }
}

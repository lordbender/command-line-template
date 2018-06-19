import axios from "axios";

export default class PhotosService {
  constructor() {
    this.apiUrl = "http://localhost:3001/api/v1";
  }

  async list() {
    const url = `${this.apiUrl}/photos`;
    console.log("url => ", url);
    const { data } = await axios.get(url);

    return data;
  }
}

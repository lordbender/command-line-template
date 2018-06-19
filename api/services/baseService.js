const fetch = require("node-fetch");
const https = require("https");
const agent = new https.Agent({
  rejectUnauthorized: false
});

class BaseService {
  async fetcher(url, method, body = {}) {
    try {
      const config = {
        method,
        agent
      };

      if (method === "put" || method === "post") config.body = body;

      const res = await fetch(url, config);
      const json = await res.json();

      return json;
    } catch (ex) {
      console.error(ex);
      return ex;
    }
  }

  async get(url) {
    return await this.fetcher(url, "get");
  }

  async post(url, body) {
    return await this.fetcher(url, "post", body);
  }

  async put(url, body) {
    return await this.fetcher(url, "put", body);
  }

  async delete(url) {
    return await this.fetcher(url, "delete");
  }
}

module.exports.BaseService = BaseService;

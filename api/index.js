const express = require("express");
require("dotenv").config();

const { HOST, PORT, BASE_ROUTE } = process.env;

class App {
  constructor() {
    this.baseRoute = BASE_ROUTE || "/utils/api/v1";
  }

  init() {
    const app = express();
    this.middlewareConfig(app);
    this.routesConfig(app);
    this.startServer(app);
  }

  middlewareConfig(app) {}

  routesConfig(app) {
    app.get("/", (req, res) => res.send("Cool"));
  }

  startServer(app) {
    const host = HOST || "0.0.0.0";
    const port = PORT || 8080;
    // eslint-disable-next-line no-console
    app.listen(port, host, () =>
      console.log(`Example app listening on port ${host}:${port}!`)
    );
  }
}

// Leave this alone
const app = new App();
app.init();

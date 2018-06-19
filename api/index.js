const express = require("express");
const Routes = require("./routes").Routes;

require("dotenv").config();

const { HOST = "localhost", PORT = 3000, BASE_ROUTE } = process.env;

class App {
  constructor() {
    this.baseRoute = BASE_ROUTE || "/api/v1";
  }

  init() {
    const app = express();
    this.middlewareConfig(app);
    this.routesConfig(app);
    this.startServer(app);
  }

  middlewareConfig(app) {}

  routesConfig(app) {
    const routes = new Routes(this.baseRoute, app);
    routes.init();
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

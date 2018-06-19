const express = require("express");
const Routes = require("./routes").Routes;

require("dotenv").config();

const { HOST = "localhost", PORT = 3000, BASE_ROUTE } = process.env;

class App {
  constructor() {
    this.baseRoute = BASE_ROUTE || "/api/v1";
    this.connections = [];
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
    const server = app.listen(port, host, () =>
      console.log(`Example app listening on port ${host}:${port}!`)
    );

    server.on("connection", connection => {
      this.connections.push(connection);
      connection.on(
        "close",
        () => (connections = connections.filter(curr => curr !== connection))
      );
    });

    // Ensure that the process exits completely.
    process.on("SIGTERM", () => this.shutDown(server));
    process.on("SIGINT", () => this.shutDown(server));
  }

  shutDown(server) {
    console.log("Received kill signal, shutting down gracefully");
    server.close(() => {
      console.log("Closed out remaining connections");
      process.exit(0);
    });

    setTimeout(() => {
      console.error(
        "Could not close connections in time, forcefully shutting down"
      );
      process.exit(1);
    }, 10000);

    this.connections.forEach(curr => curr.end());
    setTimeout(() => connections.forEach(curr => curr.destroy()), 5000);
  }
}

// Leave this alone
const app = new App();
app.init();

const { join } = require("path");
const { parse } = require("url");
const express = require("express");
const next = require("next");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get("/a", (req, res) => {
    return app.render(req, res, "/b", req.query);
  });

  server.get("/b", (req, res) => {
    return app.render(req, res, "/a", req.query);
  });

  server.get("/posts/:id", (req, res) => {
    return app.render(req, res, "/posts", { id: req.params.id });
  });

  server.get("*", (req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname } = parsedUrl;
    const rootStaticFiles = [
      "/manifest.json",
      "/sitemap.xml",
      "/favicon.ico",
      "/robots.txt",
      "/browserconfig.xml",
      "/site.webmanifest"
    ];

    // handle GET request to /service-worker.js
    if (pathname === "/service-worker.js") {
      const filePath = join(__dirname, ".next", pathname);
      app.serveStatic(req, res, filePath);
    } else if (rootStaticFiles.indexOf(parsedUrl.pathname) > -1) {
      const path = join(__dirname, "public", parsedUrl.pathname);
      app.serveStatic(req, res, path);
    } else {
      handle(req, res, parsedUrl);
    }
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});

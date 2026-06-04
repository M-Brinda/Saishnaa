const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 5173;

const MIME_TYPES = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "text/javascript",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".xml": "application/xml",
  ".json": "application/json",
  ".ico": "image/x-icon",
  ".txt": "text/plain",
};

const server = http.createServer((req, res) => {
  let filePath = "." + req.url;
  if (filePath === "./") {
    filePath = "./index.html";
  }

  // Strip query parameters or hash segments
  filePath = filePath.split("?")[0].split("#")[0];

  const extname = String(path.extname(filePath)).toLowerCase();
  const contentType = MIME_TYPES[extname] || "application/octet-stream";

  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code === "ENOENT") {
        // Fallback for subpages or standard routing
        fs.readFile("./index.html", (err, html) => {
          if (err) {
            res.writeHead(404, { "Content-Type": "text/plain" });
            res.end("404 File Not Found");
          } else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(html, "utf-8");
          }
        });
      } else {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Server Error: " + error.code);
      }
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf-8");
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
  console.log("Press Ctrl+C to stop.");
});

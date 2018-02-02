const path = require("path");
const express = require("express");
const history = require("connect-history-api-fallback");

const app = express();
const staticFileMiddleware = express.static("dist");

const port = 59339;

app.get("/bundle/bundle.js", function(req, res) {
  res.sendFile(path.join(__dirname, "dist", "bundle", "bundle.js"));
});

app.get("/public/*", function(req, res) {
  res.sendFile(path.join(__dirname, "dist", "public", req.params[0]));
});

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.use(staticFileMiddleware);
app.use(
  history({
    disableDotRule: true,
    verbose: true
  })
);
app.use(staticFileMiddleware);

app.listen(port, "localhost", function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log("Listening at " + port);
});

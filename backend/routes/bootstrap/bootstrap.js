const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/bootsrap.bundle.min.js", function (req, res) {
  res.sendFile(
    path.join(
      __dirname,
      "..",
      "node_modules",
      "bootstrap",
      "dist",
      "js",
      "bootstrap.bundele.min.js"
    )
  );
});

router.get("/bootstrap.min.css", function (req, res) {
  res.sendFile(
    path.join(
      __dirname,
      "..",
      "node_modules",
      "bootstrap",
      "dist",
      "css",
      "bootstrap.min.css"
    )
  );
});

module.exports = router;

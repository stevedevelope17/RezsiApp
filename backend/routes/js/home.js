const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/home.js", function (req, res) {
  res.sendFile(
    path.join(__dirname, "..", "..", "..", "frontend", "js", "home.js")
  );
});

module.exports = router;

const path = require("path");
const express = require("express");
const router = express.Router();

router.get("/home.css", function (req, res) {
  res.sendFile(
    path.join(__dirname, "..", "..", "..", "frontend", "css", "home.css")
  );
});

module.exports = router;

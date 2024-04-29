const path = require("path");
const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.sendFile(
    path.join(__dirname, "..", "..", "..", "frontend", "html", "login.html")
  );
});

module.exports = router;

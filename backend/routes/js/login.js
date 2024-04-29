const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/login.js", function (req, res) {
  res.sendFile(
    path.join(__dirname, "..", "..", "..", "frontend", "js", "login.js")
  );
});

module.exports = router;

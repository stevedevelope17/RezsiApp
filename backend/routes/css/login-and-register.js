const path = require("path");
const express = require("express");
const router = express.Router();

router.get("/login-and-register.css", function (req, res) {
  res.sendFile(
    path.join(__dirname, "..", "..", "..", "frontend", "css", "login-and-register.css")
  );
});

module.exports = router;

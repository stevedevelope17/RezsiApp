const path = require("path");
const express = require("express");
const router = express.Router();

router.get("/register", function (req, res) {
  res.sendFile(
    path.join(__dirname, "..", "..", "..", "frontend", "html", "register.html")
  );
});

module.exports = router;

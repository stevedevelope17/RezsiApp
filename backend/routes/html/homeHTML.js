const express = require("express");
const path = require("path");
const router = express.Router();
const checkRole = require("../../middleware/isAdmin.js");

router.get("/home", checkRole(1), function (req, res) {
  res.sendFile(
    path.join(__dirname, "..", "..", "..", "frontend", "html", "home.html")
  );
});

module.exports = router;

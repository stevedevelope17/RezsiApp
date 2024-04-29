const express = require("express");
const path = require("path");
const router = express.Router();
const checkRole = require("../../middleware/isAdmin.js");

router.get("/gas", checkRole(1), function (req, res) {
  res.sendFile(
    path.join(__dirname, "..", "..", "..", "frontend", "html", "gas.html")
  );
});

module.exports = router;

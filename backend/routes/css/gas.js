const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/gas.css", function (req, res) {
  res.sendFile(
    path.join(__dirname, "..", "..", "..", "frontend", "css", "gas.css")
  );
});

module.exports = router;

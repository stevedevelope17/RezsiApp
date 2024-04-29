const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/electricity.js", function (req, res) {
  res.sendFile(
    path.join(__dirname, "..", "..", "..", "frontend", "js", "electricity.js")
  );
});

module.exports = router;

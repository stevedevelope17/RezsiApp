const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/electricity.css", function (req, res) {
  res.sendFile(
    path.join(__dirname, "..", "..", "..", "frontend", "css", "electricity.css")
  );
});

module.exports = router;

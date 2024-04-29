const express = require("express");
const router = express.Router();
const connection = require("../../database");
const bcrypt = require("bcrypt");

const saltRounds = 10;

router.post("/reg", function (req, res) {
  const { username, email, password } = req.body;

  connection.query(
    "SELECT * FROM users WHERE email = ?",
    [email],
    (err, result) => {
      if (err) {
        return res.json("Hiba a regisztráció során!");
      }

      if (result.length > 0) {
        return res.status(400).json("Az email cím már foglalt");
      }

      bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err) {
          throw err;
        }

        connection.query(
          "INSERT INTO users(userID, email, username, password, role) VALUES(NULL, ?, ?, ?, 1)",
          [email, username, hash],
          (err, result) => {
            if (err) {
              res.json("Hiba a regisztráció során!");
            }
            res.json("Sikeres regisztráció");
          }
        );
      });
    }
  );
});

module.exports = router;

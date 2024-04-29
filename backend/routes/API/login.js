const express = require("express");
const router = express.Router();
const connection = require("../../database");
const bcrypt = require("bcrypt");

router.post("/login", function (req, res) {
  const { email, password } = req.body;

  connection.query(
    "SELECT * FROM users WHERE email = ?",
    [email],
    (err, result) => {
      if (err) {
        return res.status(500).json("Hiba történt a bejelentkezés során!");
      }

      if (
        result.length === 0 ||
        !bcrypt.compareSync(password, result[0].password)
      ) {
        return res.status(401).json("Hibás jelszó vagy felhasználónév!");
      }

      const user = {
        email: result[0].email,
        username: result[0].username,
        role: result[0].role,
      };

      res.cookie("userData", JSON.stringify(user), {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 12,
      });
      return res.json({ success: true, user });
    }
  );
});

module.exports = router;

const express = require("express");
const connection = require("../../database.js");
const router = express.Router();

// Adatok rögzítése
router.post("/gas", function (req, res) {
  // Ellenőrizzük, hogy a mDate és mValue nem üres string
  const mDate = req.body.mDate.trim();
  const mValue = req.body.mValue.trim();

  if (!mDate || !mValue) {
    return res.status(400).json({ error: "Hiányzó dátum vagy érték" });
  }

  // Ellenőrizzük, hogy a mDate érvényes dátum-e
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!dateRegex.test(mDate)) {
    return res.status(400).json({ error: "Érvénytelen dátum formátum" });
  }

  // Ellenőrizzük, hogy a mValue egy szám
  const value = parseFloat(mValue);
  if (isNaN(value)) {
    return res.status(400).json({ error: "Az érték nem szám" });
  }

  // Ellenőrizd, hogy a szám nem negatív
  if (value < 0) {
    return res.status(400).json({ error: "Az érték nem lehet negatív" });
  }

  connection.query(
    "INSERT INTO rezsi.gas (id, date, value) VALUES (null,?,?)",
    [mDate, mValue],
    (err, result) => {
      if (err) {
        res.json(err);
      }
      res.json(result);
    }
  );
});

// Rögzített adatok lekérdezése
router.get("/gasdata", function (req, res) {
  connection.query(
    "SELECT id, date, value, daily_average,intervall_length FROM gas ORDER BY date DESC",
    (err, result) => {
      if (err) {
        return res.json(err);
      }
      res.json(result);
    }
  );
});

// Rögzített adatok keresése
router.post("/gasdata", function (req, res) {
  const searching = req.body.searching;
  connection.query(
    'SELECT id, date, value FROM gas WHERE date LIKE CONCAT("%", ?, "%") OR value LIKE CONCAT("%", ?, "%")',
    [searching, searching],
    (err, result) => {
      if (err) {
        res.json(err);
      }
      res.json(result);
    }
  );
});

// Rekord törlése
router.delete("/gasdata/:id", function (req, res) {
  const deleteID = parseInt(req.params.id);
  connection.query(
    "DELETE FROM gas WHERE id = ?",
    [deleteID],
    (err, result) => {
      if (err) {
        res.status(500).json(err);
      }
      res.status(200).json(result);
    }
  );
});

// Rekord lekérdezése
router.get("/gasdata/:id", function (req, res) {
  const gasId = parseInt(req.params.id);
  connection.query(
    "SELECT date, value FROM gas WHERE id = ?",
    [gasId],
    (err, result) => {
      if (err) {
        res.status(500).json(err);
      }
      res.status(200).json(result);
    }
  );
});

// Rekord módosítása
router.put("/gasdata/:id", function (req, res) {
  const gasId = parseInt(req.params.id);
  console.log("GAS update", gasId);
  const { newDate, newValue } = req.body;
  console.log("GAS data: ", newDate, newValue);
  connection.query(
    "UPDATE gas SET date = COALESCE(?, date), value = COALESCE(?, value) WHERE id = ?",
    [newDate, newValue, gasId],
    (err, result) => {
      if (err) {
        res.status(500).json(err);
      }
      res.status(200).json(result);
    }
  );
});

// Számított adatok lekérdezése chart-hoz
router.get("/gasdatachart", function (req, res) {
  connection.query("SELECT date, daily_average FROM gas", (err, result) => {
    if (err) {
      return res.json(err);
    }
    res.json(result);
  });
});

module.exports = router;

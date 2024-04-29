const express = require("express");
const connection = require("../../database.js");
const router = express.Router();

//Kezdőképernyő éves gáz fogyasztás charthoz lekérdezés
router.get("/gasdashboard", async (req, res) => {
  try {
    connection.query(
      "SELECT EXTRACT(YEAR FROM date) AS year, max(value)-min(value) AS value FROM gas GROUP BY year",
      (err, result) => {
        if (err) {
          console.error("Error executing query:", err);
          res.status(500).json({ error: "Internal server error" });
          return;
        }

        // Adatok előkészítése a Chart.js chrthoz
        const gaugeData = {
          labels: result.map((row) => row.year),
          datasets: [
            {
              label: "Gázmérő érték(m3)",
              data: result.map((row) => row.value),
              backgroundColor: "rgba(52, 168, 83, 0.8)",
              borderColor: "rgba(32, 33, 36, 1)",
              borderWidth: 1,
            },
          ],
        };
        // Chart konfiguráció
        const gaugeOptions = {};

        // Visszaküldjük a JSON-t, amely tartalmazza a gauge adatait és beállításait
        res.json({ gaugeData, gaugeOptions });
      }
    );
  } catch (err) {
    console.error("Error executing query:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

//Kezdőképernyő éves áram fogyasztás charthoz lekérdezés
router.get("/electricitydashboard", async (req, res) => {
  try {
    connection.query(
      "SELECT EXTRACT(YEAR FROM date) AS year, max(value)-min(value) AS value FROM electricity GROUP BY year",
      (err, result) => {
        if (err) {
          console.error("Error executing query:", err);
          res.status(500).json({ error: "Internal server error" });
          return;
        }

        // Adatok előkészítése a Chart.js charthoz
        const gaugeData = {
          labels: result.map((row) => row.year),
          datasets: [
            {
              label: "Árammérő érték(kWh)",
              data: result.map((row) => row.value),
              backgroundColor: "rgba(52, 168, 83, 0.8)",
              borderColor: "rgba(32, 33, 36, 1)",
              borderWidth: 1,
            },
          ],
        };

        // Chart konfiguráció
        const gaugeOptions = {};

        // Visszaküldjük a JSON-t, amely tartalmazza a gauge adatait és beállításait
        res.json({ gaugeData, gaugeOptions });
      }
    );
  } catch (err) {
    console.error("Error executing query:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Gáz adatok lekérdezése a figyelmeztetéshez
router.get("/dateCheckGas", (req, res) => {
  connection.query("SELECT MAX(date) as date FROM gas", (err, result) => {
    if (err) {
      console.error("Error executing query:", err);
      res.status(500).json({ error: "Internal server error" });
      return;
    }
    // Adatelfekvőség figyeléshez számítás: legrégebbi adat számítás
    const oldestDate = new Date(result[0]["date"]);
    const currentDate = new Date();
    const diffInDays = Math.floor(
      (currentDate - oldestDate) / (1000 * 60 * 60 * 24)
    );

    // Ellenőrizzük, hogy több mint 10 napja van-e az utolsó dátumnak
    if (diffInDays > 10) {
      // Ha igen, küldjünk egy speciális üzenetet a toaster számára
      res.status(200).json({
        message: "A legutóbbi gázmérő mérési adat már több mint 10 napos!",
      });
    } else {
      // res.json({ message: 'A gázmérő mérési adatok 10 napon belüliek!' });
    }
  });
});

// Áram adatok lekérdezése a figyelmeztetéshez
router.get("/dateCheckElectricity", (req, res) => {
  connection.query(
    "SELECT MAX(date) as date FROM electricity",
    (err, result) => {
      if (err) {
        console.error("Error executing query:", err);
        res.status(500).json({ error: "Internal server error" });
        return;
      }
      // Adatelfekvőség figyeléshez számítás: legrégebbi adat számítás
      const oldestDate = new Date(result[0]["date"]);
      const currentDate = new Date();
      const diffInDays = Math.floor(
        (currentDate - oldestDate) / (1000 * 60 * 60 * 24)
      );

      // Ellenőrizzük, hogy több mint 10 napja van-e az utolsó dátumnak
      if (diffInDays > 10) {
        // Ha igen, küldjünk egy speciális üzenetet a toaster számára
        res.status(200).json({
          message: "A legutóbbi árammérő mérési adat már több mint 10 napos!",
        });
      } else {
        // res.json({ message: 'Az árammérő mérési adatok 10 napon belüliek!' });
      }
    }
  );
});

module.exports = router;

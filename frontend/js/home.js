// Kezdőképernyő gázmérő érték éves bontásban
document.addEventListener("DOMContentLoaded", function () {
  fetch("/gasdashboard")
    .then((response) => response.json())
    .then((data) => {
      // Gauge adatai és beállításai
      const gaugeData = data.gaugeData;
      const gaugeOptions = data.gaugeOptions;

      // A canvas elem kiválasztása
      const canvas = document.getElementById("gasGauge");

      // Gauge inicializálása
      const ctx = canvas.getContext("2d");
      new Chart(ctx, {
        type: "bar",
        data: gaugeData,
        options: {
          legend: {
            display: true,
            labels: {
              fontSize: 18,
            },
          },
          title: {
            display: true,
            text: "Gáz fogyasztás éves bontásban",
            fontSize: 20,
          },
          scales: {
            xAxes: [
              {
                ticks: {
                  fontSize: 16,
                },
              },
            ],
            yAxes: [
              {
                ticks: {
                  fontSize: 16,
                },
              },
            ],
          },
          responsive: false,
        },
      });
    })
    .catch((error) => console.error("Error fetching data:", error));
});

// Kezdőképernyő árammérő érték éves bontásban
document.addEventListener("DOMContentLoaded", function () {
  fetch("/electricitydashboard")
    .then((response) => response.json())
    .then((data) => {
      // A gauge adatai és beállításai
      const gaugeData = data.gaugeData;
      const gaugeOptions = data.gaugeOptions;

      // A canvas elem kiválasztása
      const canvas = document.getElementById("electricityGauge");

      // Gauge inicializálása
      const ctx = canvas.getContext("2d");
      new Chart(ctx, {
        type: "bar",
        data: gaugeData,
        options: {
          legend: {
            display: true,
            labels: {
              fontSize: 18,
            },
          },
          title: {
            display: true,
            text: "Áram fogyasztás éves bontásban",
            fontSize: 20,
          },
          scales: {
            xAxes: [
              {
                ticks: {
                  fontSize: 16,
                },
              },
            ],
            yAxes: [
              {
                ticks: {
                  fontSize: 16,
                },
              },
            ],
          },
          responsive: false,
        },
      });
    })
    .catch((error) => console.error("Error fetching data:", error));
});

// Ellenőrizzük mennyire friss az adat
document.addEventListener("DOMContentLoaded", function () {
  $.get("/dateCheckGas", function (response) {
    if (response.message) {
      Swal.fire({
        position: "top-end",
        icon: "warning",
        showConfirmButton: false,
        timer: 2500,
        text: response.message,
      });
    } else {
      console.log("Error reading date from database.");
    }
  }).fail(function (err) {
    console.error("Error calling API:", err);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  $.get("/dateCheckElectricity", function (response) {
    if (response.message) {
      setTimeout(function () {
        Swal.fire({
          position: "top-end",
          icon: "warning",
          showConfirmButton: false,
          timer: 2500,
          text: response.message,
        });
      }, 3000);
    } else {
      console.log("Error reading date from database.");
    }
  }).fail(function (err) {
    console.error("Error calling API:", err);
  });
});

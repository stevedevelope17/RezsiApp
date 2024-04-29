// Adatok frisstése
document.addEventListener("DOMContentLoaded", function () {
  fetchGasData();
  fetchChartData();
});

// Aktuális dátum előtöltés
document.addEventListener("DOMContentLoaded", function () {
  const currentDate = new Date().toISOString().slice(0, 10);
  document.getElementById("mDate").value = currentDate;
});

// Dátum és érték kiolvasás és küldés a backendnek
document.getElementById("add-gas").onsubmit = async function (event) {
  event.preventDefault();
  const mDate = event.target.elements.mDate.value;
  const mValue = event.target.elements.mValue.value;

  const res = await fetch("/gas", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ mDate, mValue }),
  });
  if (res.ok) {
    event.target.elements.mValue.value = null;
    fetchGasData(); // Táblázat frissítées
    fetchChartData(); // Chart frisstése
  }
};

// Keresés
document.getElementById("searchingForm").onsubmit = async function (event) {
  event.preventDefault();
  console.log("keresés...");

  const searching = event.target.elements.searching.value;

  const res = await fetch("/gasdata", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ searching }),
  });

  const gasData = await res.json();
  console.log("Gáz találat adatok: ", gasData);

  displayGasData(gasData);
};

function displayGasData(data) {
  const gasTableDiv = document.getElementById("gasTable");
  const table = document.createElement("table");

  // Fej sorok
  table.className = "table table-bordered table-striped";
  const headerRow = table.insertRow();
  headerRow.className = "table-dark";
  const dateHeader = headerRow.insertCell();
  dateHeader.textContent = "Dátum";
  const dailyHeader = headerRow.insertCell();
  dailyHeader.textContent = "Érték";
  const dailyAverageHeader = headerRow.insertCell();
  dailyAverageHeader.textContent = "Napi átlag";
  const periodHeader = headerRow.insertCell();
  periodHeader.textContent = "Eltelt napok";
  const buttonHeader = headerRow.insertCell();
  buttonHeader.textContent = "Műveletek";
  buttonHeader.className = "col-sm-1";

  // Adatsorok
  data.forEach((entry) => {
    const row = table.insertRow();
    const dateCell = row.insertCell();
    dateCell.textContent = entry.date.slice(0, 10);
    const dailyCell = row.insertCell();
    dailyCell.textContent = entry.value;
    const dailyAverageCell = row.insertCell();
    dailyAverageCell.textContent = entry.daily_average;
    const periodCell = row.insertCell();
    periodCell.textContent = entry.intervall_length;
    const buttonCell = row.insertCell();

    // Funkciógombok
    buttonCell.innerHTML = `<div>
            <button class="btn btn-outline-secondary" type="button" onclick="deleteGasData(${entry.id})"><i class="fa-solid fa-trash fa-xs"></i></button>
            <button class="btn btn-outline-secondary" type="button" onclick="editGasData(${entry.id})"><i class="fa-solid fa-edit fa-xs"></i></button>
        </div>`;
  });

  gasTableDiv.innerHTML = table.outerHTML;
}

async function fetchGasData() {
  const res = await fetch("/gasdata");
  const gasData = await res.json();

  displayGasData(gasData);
}

async function fetchChartData() {
  const res = await fetch("/gasdatachart");
  const gasSeries = await res.json();
 
  // Rendezzük az adatokat időrendi sorrendbe
  gasSeries.sort((a, b) => new Date(a.date) - new Date(b.date));

  // Gyűjtsük az adatokat hónap-nap alapján
  const gasData = {};

  for (let gasItem of gasSeries) {
    const date = new Date(gasItem.date);
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Hónapok 0-tól számolódnak, ezért adunk hozzá 1-et
    const day = date.getDate();
    const key = `${month.toString().padStart(2, "0")}-${day
      .toString()
      .padStart(2, "0")}`; // Hónap-nap, kiegészítve 0-val a rendezés miatt

    // Hiányzó adatok kiegésztése a rendezés és szakadási pontok miatt
    if (!gasData[key]) {
      gasData[key] = {};
    }

    gasData[key][year] = gasItem.daily_average;
  }

  // Az év összes napjának generálása
  const startDate = new Date(gasSeries[0].date);
  const endDate = new Date(gasSeries[gasSeries.length - 1].date);
  const allDates = generateAllDates(startDate, endDate);

  // Adatok összeállítása a hiányzó napokra
  for (const date of allDates) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const key = `${month.toString().padStart(2, "0")}-${day
      .toString()
      .padStart(2, "0")}`;

    if (!gasData[key]) {
      gasData[key] = {};
    }

    // Ha az adott dátumhoz nincs adat, akkor nullát állítunk be
    if (!gasData[key][year]) {
      gasData[key][year] = null;
    }
  }

  const gasLabels = Object.keys(gasData).sort(); // Rendezzük a hónap-nap párokat
  const years = Array.from(
    new Set(gasSeries.map((item) => new Date(item.date).getFullYear()))
  ).sort();

  const datasets = [];
  const barColors = ["#9AA0A6", "#EA4335", "#34A853", "#0D652D", "#E37400"];

  // Adatsorok létrehozása minden évhez
  for (const year of years) {
    const gasValues = [];

    for (const gasLabel of gasLabels) {
      // Ellenőrizzük, hogy az adott évhez tartozó hónap-nap párhoz van-e érték
      if (gasData[gasLabel][year] !== undefined) {
        gasValues.push(gasData[gasLabel][year]);
      } else {
        gasValues.push(null); // Ha nincs érték, nullát adunk hozzá
      }
    }

    const isLastDataset = year === years[years.length - 1]; // Az utolsó adatsor ellenőrzése (Ez azért kell, hogy a többi szériát inaktvvá tegyük automatikusan)

    datasets.push({
      label: year,
      borderColor: barColors.pop(),
      fill: false,
      data: gasValues,
      hidden: !isLastDataset,
    });
  }

  // A chart feléptése és adatbetöltés
  new Chart("gasChart", {
    type: "line",
    data: {
      labels: gasLabels,
      datasets: datasets,
    },
    options: {
      legend: { display: true },
      title: {
        display: true,
        text: "Gáz fogyasztás",
        fontSize: 18,
      },
      scales: {
        xAxes: [
          {
            ticks: {
              fontSize: 14,
            },
          },
        ],
        yAxes: [
          {
            ticks: {
              fontSize: 14,
            },
          },
        ],
      },
      spanGaps: true,
    },
  });
}

// Legendában lévő címkékre kattintás eseménykezelője
document.getElementById("gasChart").onclick = function (evt) {
  const activePoints = myChart.getElementsAtEventForMode(
    evt,
    "point",
    myChart.options
  );
  if (activePoints.length > 0) {
    const datasetIndex = activePoints[0].datasetIndex;
    const dataset = myChart.data.datasets[datasetIndex];
    dataset.hidden = !dataset.hidden; // Adatsor elrejtése vagy megjelenítése
    myChart.update(); // Chart frissítése
  }
};

// Az év összes dátumának generálása
function generateAllDates(startDate, endDate) {
  const dates = [];
  let currentDate = new Date(startDate);
  while (currentDate <= endDate) {
    dates.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return dates;
}

// Adatrekord törlése
async function deleteGasData(idGas) {
  const confirmed = confirm("Biztosan szeretné törölni a rekordot?");

  if (!confirmed) {
    return;
  }

  const res = await fetch(`/gasdata/${idGas}`, {
    method: "DELETE",
  });

  //const gasData = await res.json();

  if (res.ok) {
    fetchGasData();
    fetchChartData();
  }
}

// Adatrekord módostása
async function editGasData(idGas) {
  const res = await fetch(`/gasdata/${idGas}`);
  const data = await res.json();
  console.log("Módosítandó adatok: ", data);

  const editGasForm = document.getElementById("editGas");

  const modal = new bootstrap.Modal(editGasForm);

  editGasForm.setAttribute("data-id", idGas);

  const editDate = data[0].date.slice(0, 10);
  document.getElementById("editDate").value = editDate;
  document.getElementById("editValue").value = data[0].value;

  modal.show();
}

async function updateGasData() {
  const editForm = document.getElementById("editGas");
  const id = editForm.getAttribute("data-id");
  const newDate = document.getElementById("editDate").value;
  console.log("Új dátum: ", newDate);
  const newValue = document.getElementById("editValue").value;
  console.log("Új mérőállás: ", newValue);

  const res = await fetch(`/gasdata/${id}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ newDate, newValue }),
  });

  if (res.ok) {
    alert("Sikeres módosítás!");
    fetchGasData();
    fetchChartData();
  } else {
    console.log(res);
    alert("Hiba a módosítás során!");
  }
}

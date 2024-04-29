// Adatok frisstése
document.addEventListener("DOMContentLoaded", function () {
  fetchElectricityData();
  fetchChartData();
});

// Aktuális dátum előtöltés
document.addEventListener("DOMContentLoaded", function () {
  const currentDate = new Date().toISOString().slice(0, 10);
  document.getElementById("mDate").value = currentDate;
});

// Dátum és érték kiolvasás és küldés a backendnek
document.getElementById("add-electricity").onsubmit = async function (event) {
  event.preventDefault();
  const mDate = event.target.elements.mDate.value;
  const mValue = event.target.elements.mValue.value;
  console.log(mDate, mValue);

  const res = await fetch("/electricity", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ mDate, mValue }),
  });
  if (res.ok) {
    event.target.elements.mValue.value = null;
    fetchElectricityData(); // Táblázat frisstése
    fetchChartData(); // Chart frisstése
  }
};

// Keresés
document.getElementById("searchingForm").onsubmit = async function (event) {
  event.preventDefault();
  console.log("keresés...");

  const searching = event.target.elements.searching.value;

  const res = await fetch("/electricitydata", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ searching }),
  });

  const electricityData = await res.json();
  console.log("Áram találat adatok: ", electricityData);

  displayElectricityData(electricityData);
};

function displayElectricityData(data) {
  const electricityTableDiv = document.getElementById("electricityTable");
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
            <button class="btn btn-outline-secondary" type="button" onclick="deleteElectricityData(${entry.id})"><i class="fa-solid fa-trash fa-xs"></i></button>
            <button class="btn btn-outline-secondary" type="button" onclick="editElectricityData(${entry.id})"><i class="fa-solid fa-edit fa-xs"></i></button>
        </div>`;
  });

  electricityTableDiv.innerHTML = table.outerHTML;
}

async function fetchElectricityData() {
  const res = await fetch("/electricitydata");
  const electricityData = await res.json();
  console.log("Áram adatok: ", electricityData);

  displayElectricityData(electricityData);
}

async function fetchChartData() {
  const res = await fetch("/electricitychartdata");
  const electricitySeries = await res.json();
  console.log(electricitySeries);

  // Rendezzük az adatokat időrendi sorrendbe
  electricitySeries.sort((a, b) => new Date(a.date) - new Date(b.date));

  // Gyűjtsük az adatokat hónap-nap alapján
  const electricityData = {};

  for (let electricityItem of electricitySeries) {
    const date = new Date(electricityItem.date);
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Hónapok 0-tól számolódnak, ezért adunk hozzá 1-et
    const day = date.getDate();
    const key = `${month.toString().padStart(2, "0")}-${day
      .toString()
      .padStart(2, "0")}`; // Hónap-nap, kiegészítve 0-val a rendezés miatt

    // Hiányzó adatok kiegésztése a rendezés és szakadási pontok miatt
    if (!electricityData[key]) {
      electricityData[key] = {};
    }

    electricityData[key][year] = electricityItem.daily_average;
  }

  // Az év összes napjának generálása
  const startDate = new Date(electricitySeries[0].date);
  const endDate = new Date(
    electricitySeries[electricitySeries.length - 1].date
  );
  const allDates = generateAllDates(startDate, endDate);

  // Adatok összeállítása a hiányzó napokra
  for (const date of allDates) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const key = `${month.toString().padStart(2, "0")}-${day
      .toString()
      .padStart(2, "0")}`;

    if (!electricityData[key]) {
      electricityData[key] = {};
    }

    // Ha az adott dátumhoz nincs adat, akkor nullát állítunk be
    if (!electricityData[key][year]) {
      electricityData[key][year] = null;
    }
  }

  const electricityLabels = Object.keys(electricityData).sort(); // Rendezzük a hónap-nap párokat
  const years = Array.from(
    new Set(electricitySeries.map((item) => new Date(item.date).getFullYear()))
  ).sort();

  const datasets = [];
  const barColors = ["#9AA0A6", "#EA4335", "#34A853", "#0D652D", "#E37400"];

  // Adatsorok létrehozása minden évhez
  for (const year of years) {
    const electricityValues = [];

    for (const electricityLabel of electricityLabels) {
      // Ellenőrizzük, hogy az adott évhez tartozó hónap-nap párhoz van-e érték
      if (electricityData[electricityLabel][year] !== undefined) {
        electricityValues.push(electricityData[electricityLabel][year]);
      } else {
        electricityValues.push(null); // Ha nincs érték, nullát adunk hozzá
      }
    }

    const isLastDataset = year === years[years.length - 1]; // Az utolsó adatsor ellenőrzése (Ez azért kell, hogy a többi szériát inaktvvá tegyük automatikusan)

    datasets.push({
      label: year,
      borderColor: barColors.pop(),
      fill: false,
      data: electricityValues,
      hidden: !isLastDataset, // ha nem az utolsó akkor rejtjük
    });
  }

  // A chart feléptése és adatbetöltés
  new Chart("electricityChart", {
    type: "line",
    data: {
      labels: electricityLabels,
      datasets: datasets,
    },
    options: {
      legend: { display: true },
      title: {
        display: true,
        text: "Áram fogyasztás",
        fontSize: 18, 
      },
      scales: {
        xAxes: [{
          ticks: {
            fontSize: 14, 
          }
        }],
        yAxes: [{
          ticks: {
            fontSize: 14, 
          }
        }]
      },
      spanGaps: true,
    },
  });
  
}

// Legendában lévő címkékre kattintás eseménykezelője
document.getElementById("electricityChart").onclick = function (evt) {
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
async function deleteElectricityData(idElectricity) {
  const confirmed = confirm("Biztosan szeretné törölni a rekordot?");

  if (!confirmed) {
    return;
  }

  const res = await fetch(`/electricitydata/${idElectricity}`, {
    method: "DELETE",
  });
  //const electricityData = await res.json();
  if (res.ok) {
    fetchElectricityData();
    fetchChartData();
  }
}

// Adatrekord módostása
async function editElectricityData(idElectricity) {
  const res = await fetch(`/electricitydata/${idElectricity}`);
  const data = await res.json();
  console.log("Módosítandó adatok: ", data);

  const editElectricityForm = document.getElementById("editElectricity");

  const modal = new bootstrap.Modal(editElectricityForm);

  editElectricityForm.setAttribute("data-id", idElectricity);

  const editDate = data[0].date.slice(0, 10);
  document.getElementById("editDate").value = editDate;
  document.getElementById("editValue").value = data[0].value;

  modal.show();
}

async function updateElectricityData() {
  const editForm = document.getElementById("editElectricity");
  const id = editForm.getAttribute("data-id");
  const newDate = document.getElementById("editDate").value;
  console.log("Új dátum: ", newDate);
  const newValue = document.getElementById("editValue").value;
  console.log("Új mérőállás: ", newValue);

  const res = await fetch(`/electricitydata/${id}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ newDate, newValue }),
  });

  if (res.ok) {
    alert("Sikeres módosítás!");
    fetchElectricityData();
    fetchChartData();
  } else {
    console.log(res);
    alert("Hiba a módosítás során!");
  }
}

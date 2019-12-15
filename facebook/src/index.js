function renderDays() {
  let days = ["Dia"];
  let selectDayEl = document.getElementById("daySelect");

  for (let i = 1; i <= 31; i++) {
    days.push(i);
  }

  days.forEach(day => {
    let dayOption = document.createElement("option");
    dayOption.appendChild(document.createTextNode(day));
    selectDayEl.appendChild(dayOption);
  });
}

function renderMonths() {
  let months = ["Mês"];
  let selectMonthEl = document.getElementById("monthSelect");

  months.push("Jan");
  months.push("Fev");
  months.push("Mar");
  months.push("Abr");
  months.push("Maio");
  months.push("Jun");
  months.push("Jul");
  months.push("Ago");
  months.push("Set");
  months.push("Out");
  months.push("Nov");
  months.push("Dez");

  months.forEach(month => {
    let monthOption = document.createElement("option");
    monthOption.appendChild(document.createTextNode(month));
    selectMonthEl.appendChild(monthOption);
  });
}

function renderYears() {
  let years = ["Ano"];
  let selectYearEl = document.getElementById("yearSelect");

  for (let i = 2019; i >= 1905; i--) {
    years.push(i);
  }

  years.forEach(year => {
    let yearOption = document.createElement("option");
    yearOption.appendChild(document.createTextNode(year));
    selectYearEl.appendChild(yearOption);
  });
}

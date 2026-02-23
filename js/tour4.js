console.log("Alphine Escape page loaded.");

let votes = { yes: 0, no: 0 };

function vote(choice) {
  if (choice === "yes") votes.yes++;
  if (choice === "no") votes.no++;

  const total = votes.yes + votes.no;
  const yesPercent = ((votes.yes / total) * 100).toFixed(1);
  const noPercent = ((votes.no / total) * 100).toFixed(1);

  document.getElementById("vote-results").innerHTML = `
    👍 Yes: ${votes.yes} (${yesPercent}%)<br>
    👎 No: ${votes.no} (${noPercent}%)
  `;
}

function getFakeWeatherForecast(city) {
  const cityForecasts = {
    "Grenoble": [
      { day: "Monday", temp: 13, desc: "☁️ Cloudy" },
      { day: "Tuesday", temp: 14, desc: "🌧️ Rain" },
      { day: "Wednesday", temp: 12, desc: "🌧️ Showers" },
      { day: "Thursday", temp: 15, desc: "🌤️ Clearer" },
      { day: "Friday", temp: 16, desc: "☀️ Sunny" }
    ]
  };

  return cityForecasts[city] || [];
}

function renderWeatherForecast(city) {
  const weatherBox = document.getElementById("weather-info");
  if (!weatherBox) return;
  weatherBox.innerHTML = "";

  const forecast = getFakeWeatherForecast(city);
  forecast.forEach(day => {
    const line = document.createElement("p");
    line.textContent = `${day.day}: ${day.temp}°C ${day.desc}`;
    weatherBox.appendChild(line);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  renderWeatherForecast("Grenoble"); 
});
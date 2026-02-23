// WHOLE FILE WAS CREATED BY ARTUR KONDRATIUK
// Log a message when the page is loaded to the console
console.log("Sunny Spain page loaded.");

// Initialize an object to keep track of votes
let votes = { yes: 0, no: 0 };

// Function to handle votes
function vote(choice) {
  // Increment the respective vote count based on the choice
  if (choice === "yes") votes.yes++;
  if (choice === "no") votes.no++;

  // Calculate the total votes and percentages for yes and no
  const total = votes.yes + votes.no;
  const yesPercent = ((votes.yes / total) * 100).toFixed(1);
  const noPercent = ((votes.no / total) * 100).toFixed(1);

  // Update the vote results display in the HTML
  document.getElementById("vote-results").innerHTML = `
    👍 Yes: ${votes.yes} (${yesPercent}%)<br>
    👎 No: ${votes.no} (${noPercent}%)
  `;
}

// Function to get fake weather data based on the city
function getFakeWeatherForecast(city) {
  // Define weather forecasts for specific cities (currently only Madrid)
  const cityForecasts = {
    "Madrid": [
      { day: "Monday", temp: 23, desc: "☀️ Sunny" },
      { day: "Tuesday", temp: 25, desc: "☀️ Sunny" },
      { day: "Wednesday", temp: 22, desc: "🌤️ Partly cloudy" },
      { day: "Thursday", temp: 20, desc: "🌦️ Chance of rain" },
      { day: "Friday", temp: 24, desc: "☀️ Sunny" }
    ],
  };

  // Return the forecast for the city, or an empty array if not found
  return cityForecasts[city] || [];
}

// Function to render the weather forecast in the HTML
function renderWeatherForecast(city) {
  // Get the element where the weather info will be displayed
  const weatherBox = document.getElementById("weather-info");
  if (!weatherBox) return; // If the element doesn't exist, exit the function

  // Clear any existing weather info in the box
  weatherBox.innerHTML = "";

  // Get the forecast for the specified city
  const forecast = getFakeWeatherForecast(city);
  
  // Iterate through each day's forecast and create a paragraph element to display it
  forecast.forEach(day => {
    const line = document.createElement("p");
    line.textContent = `${day.day}: ${day.temp}°C ${day.desc}`;
    weatherBox.appendChild(line); // Append each forecast to the weather box
  });
}

// Wait until the DOM content is fully loaded, then render the weather forecast for Madrid
document.addEventListener("DOMContentLoaded", function () {
  renderWeatherForecast("Madrid"); 
});
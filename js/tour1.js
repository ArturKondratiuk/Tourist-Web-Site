// WHOLE FILE WAS CREATED BY ARTUR KONDRATIUK
// Log a message to the console when the page is loaded
console.log("Iceland Adventure page loaded.");

// Initialize vote counts for 'yes' and 'no'
let votes = { yes: 0, no: 0 };

// Function to handle voting when the user clicks Yes or No
function vote(choice) {
  // Increment the appropriate vote count based on the choice
  if (choice === "yes") votes.yes++;
  if (choice === "no") votes.no++;

  // Calculate the total votes, and the percentage of Yes and No votes
  const total = votes.yes + votes.no;
  const yesPercent = ((votes.yes / total) * 100).toFixed(1); // Round to 1 decimal place
  const noPercent = ((votes.no / total) * 100).toFixed(1);   // Round to 1 decimal place

  // Update the vote results section with the new percentages and counts
  document.getElementById("vote-results").innerHTML = `
    👍 Yes: ${votes.yes} (${yesPercent}%)<br>
    👎 No: ${votes.no} (${noPercent}%)
  `;
}

// Function to return a fake weather forecast for a given city (for demo purposes)
function getFakeWeatherForecast(city) {
  // Sample data for Reykjavík weather forecast
  const cityForecasts = {
    "Reykjavík": [
      { day: "Monday", temp: 15, desc: "☁️ Cloudy" },
      { day: "Tuesday", temp: 18, desc: "🌤️ Partly sunny" },
      { day: "Wednesday", temp: 14, desc: "🌧️ Light rain" },
      { day: "Thursday", temp: 17, desc: "☀️ Sunny" },
      { day: "Friday", temp: 16, desc: "⛅ Mixed clouds" }
    ],
  };

  // Return the forecast for the given city, or an empty array if not found
  return cityForecasts[city] || [];
}

// Function to render the weather forecast in the designated section of the page
function renderWeatherForecast(city) {
  // Get the weather info box element from the DOM
  const weatherBox = document.getElementById("weather-info");
  
  // If the weather box does not exist, exit the function
  if (!weatherBox) return;

  // Clear any existing content in the weather box
  weatherBox.innerHTML = "";

  // Get the forecast data for the specified city
  const forecast = getFakeWeatherForecast(city);

  // Loop through each day's forecast and create a paragraph element for each
  forecast.forEach(day => {
    const line = document.createElement("p");
    line.textContent = `${day.day}: ${day.temp}°C ${day.desc}`;
    weatherBox.appendChild(line); // Add the forecast line to the weather box
  });
}

// Event listener to run the renderWeatherForecast function when the page is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  renderWeatherForecast("Reykjavík"); // Render weather forecast for Reykjavík
});
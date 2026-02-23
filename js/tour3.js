// WHOLE FILE WAS CREATED BY ARTUR KONDRATIUK
// Log to the console when the "Magic Ireland" page is loaded
console.log("Magic Ireland page loaded.");

// Initialize the votes object to keep track of 'yes' and 'no' votes
let votes = { yes: 0, no: 0 };

// Function to handle the vote and update the results
function vote(choice) {
  // Increment the 'yes' or 'no' vote based on user selection
  if (choice === "yes") votes.yes++;
  if (choice === "no") votes.no++;

  // Calculate the total votes and percentage for 'yes' and 'no'
  const total = votes.yes + votes.no;
  const yesPercent = ((votes.yes / total) * 100).toFixed(1); // Calculate 'yes' percentage
  const noPercent = ((votes.no / total) * 100).toFixed(1); // Calculate 'no' percentage

  // Update the displayed vote results with the counts and percentages
  document.getElementById("vote-results").innerHTML = `
    👍 Yes: ${votes.yes} (${yesPercent}%)<br>
    👎 No: ${votes.no} (${noPercent}%)
  `;
}

// Function to simulate getting a weather forecast for a given city
function getFakeWeatherForecast(city) {
  // A predefined set of fake weather forecasts for Dublin
  const cityForecasts = {
    "Dublin": [
      { day: "Monday", temp: 16, desc: "⛅ Mixed clouds" },
      { day: "Tuesday", temp: 17, desc: "☁️ Cloudy" },
      { day: "Wednesday", temp: 14, desc: "🌧️ Showers" },
      { day: "Thursday", temp: 15, desc: "🌦️ Light rain" },
      { day: "Friday", temp: 18, desc: "🌤️ Partly sunny" }
    ],
  };

  // Return the forecast for the given city, or an empty array if the city is not found
  return cityForecasts[city] || [];
}

// Function to render the weather forecast in the "weather-info" section
function renderWeatherForecast(city) {
  const weatherBox = document.getElementById("weather-info"); // Get the weather-info container
  if (!weatherBox) return; // If the container doesn't exist, stop the function

  // Clear the previous weather data
  weatherBox.innerHTML = "";

  // Get the weather forecast for the selected city
  const forecast = getFakeWeatherForecast(city);

  // Loop through each day of the forecast and create a paragraph element for each one
  forecast.forEach(day => {
    const line = document.createElement("p");
    // Set the text content of the paragraph to show the day, temperature, and description
    line.textContent = `${day.day}: ${day.temp}°C ${day.desc}`;
    // Append the paragraph to the weather-info container
    weatherBox.appendChild(line);
  });
}

// Event listener for when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Call the renderWeatherForecast function and pass in "Dublin" as the city
  renderWeatherForecast("Dublin"); 
});
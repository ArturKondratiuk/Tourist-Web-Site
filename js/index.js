// WHOLE FILE WAS CREATED BY ARTUR KONDRATIUK
console.log("Homepage loaded."); 
// Logs a message to the console indicating that the homepage has loaded successfully.

document.addEventListener("DOMContentLoaded", () => {
    // Waits for the DOM structure to be fully loaded before executing the script.

    const main = document.querySelector("main") || document.body;
    // Selects the <main> element if it exists; falls back to <body> if not.

    // Create and style the survey box.
    const surveyBox = document.createElement("div");
    surveyBox.style.margin = "2rem auto";
    surveyBox.style.padding = "1.5rem";
    surveyBox.style.border = "2px dashed #ff6f3c";
    surveyBox.style.borderRadius = "12px";
    surveyBox.style.maxWidth = "600px";
    surveyBox.style.textAlign = "center";
    surveyBox.style.background = "#fff5ef";

    // Create and add a title to the survey box.
    const title = document.createElement("h2");
    title.textContent = "Rate the interface (1–5)";
    title.style.marginBottom = "1rem";

    // Create and style an input field for user ratings.
    const input = document.createElement("input");
    input.type = "number";
    input.min = 1;
    input.max = 5;
    input.placeholder = "Enter a number from 1 to 5";
    input.style.padding = "0.5rem";
    input.style.width = "60%";
    input.style.marginBottom = "1rem";
    input.style.borderRadius = "8px";
    input.style.border = "1px solid #ccc";

    // Create and style the submit button.
    const btn = document.createElement("button");
    btn.textContent = "Submit";
    btn.style.background = "#ff6f3c";
    btn.style.color = "white";
    btn.style.border = "none";
    btn.style.padding = "0.5rem 1.2rem";
    btn.style.marginLeft = "0.5rem";
    btn.style.borderRadius = "8px";
    btn.style.cursor = "pointer";

    // Create a feedback paragraph for displaying user messages.
    const feedback = document.createElement("p");
    feedback.style.marginTop = "1rem";
    feedback.style.fontWeight = "bold";

    // Add functionality to the submit button.
    btn.addEventListener("click", () => {
        const value = parseInt(input.value); // Parse user input as an integer.
        if (isNaN(value) || value < 1 || value > 5) {
            // If input is invalid, show an error message.
            feedback.textContent = "Please enter a number between 1 and 5.";
            feedback.style.color = "red";
            return;
        }

        // Define messages based on user ratings.
        const messages = {
            5: "Awesome! Thank you 😊",
            4: "Great! We'll strive for a 5!",
            3: "Thanks! We’ll keep improving.",
            2: "Hmm... Tell us what we can improve!",
            1: "😢 We're sad to hear that... but we'll work on it!"
        };

        feedback.textContent = messages[value]; // Display the corresponding feedback.
        feedback.style.color = "#ff6f3c"; // Set the feedback text color.
    });

    // Append all elements to the survey box.
    surveyBox.appendChild(title);
    surveyBox.appendChild(input);
    surveyBox.appendChild(btn);
    surveyBox.appendChild(feedback);
    main.appendChild(surveyBox); // Add the survey box to the main content.

    // Add hover effects to all tour cards.
    const cards = document.querySelectorAll(".tour-card");
    cards.forEach(card => {
        card.style.transition = "box-shadow 0.3s ease"; // Smooth transition for hover effects.
        card.addEventListener("mouseover", () => {
            card.style.boxShadow = "0 6px 12px rgba(0,0,0,0.1)"; // Increase shadow on hover.
        });
        card.addEventListener("mouseout", () => {
            card.style.boxShadow = "0 2px 6px rgba(0,0,0,0.05)"; // Reset shadow on mouse out.
        });
    });

    // Function to start and display a discount timer.
    function startDiscountTimer() {
        // Create and style the timer box.
        const timerBox = document.createElement("div");
        timerBox.style.margin = "2rem auto";
        timerBox.style.textAlign = "center";
        timerBox.style.fontSize = "1.2rem";
        timerBox.style.color = "#ff6f3c";
        timerBox.style.fontWeight = "bold";

        const timerText = document.createElement("p");
        timerText.textContent = "⏳ Time left for today's special discount:";

        const timeDisplay = document.createElement("div");
        timeDisplay.id = "discount-timer";
        timeDisplay.style.fontSize = "1.8rem";
        timeDisplay.style.marginTop = "0.5rem";

        timerBox.appendChild(timerText);
        timerBox.appendChild(timeDisplay);
        document.body.insertBefore(timerBox, document.querySelector("footer")); // Add timer above footer.

        // Function to update the timer every second.
        function updateTimer() {
            const now = new Date(); // Get current time.
            const endOfDay = new Date(); // Set end of day.
            endOfDay.setHours(23, 59, 59, 999);

            const diff = endOfDay - now; // Calculate time difference.
            if (diff <= 0) {
                // If the time is up, stop the timer.
                timeDisplay.textContent = "The promotion has ended!";
                timeDisplay.style.color = "red";
                clearInterval(interval); // Stop the timer.
                return;
            }

            // Calculate hours, minutes, and seconds remaining.
            const hours = String(Math.floor(diff / 1000 / 60 / 60)).padStart(2, "0");
            const minutes = String(Math.floor((diff / 1000 / 60) % 60)).padStart(2, "0");
            const seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, "0");

            timeDisplay.textContent = `${hours}:${minutes}:${seconds}`; // Update the timer display.
        }

        updateTimer(); // Initialize the timer immediately.
        const interval = setInterval(updateTimer, 1000); // Update the timer every second.
    }

    startDiscountTimer(); // Start the discount timer.
});
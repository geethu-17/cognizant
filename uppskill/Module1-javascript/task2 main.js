// Event Details
const eventName = "Community Clean-Up Drive";
const eventDate = "10 July 2026";
let availableSeats = 50;

// Display event information using template literals
document.getElementById("eventInfo").innerHTML =
`Event: ${eventName} <br>
Date: ${eventDate}`;

// Display available seats
document.getElementById("seatCount").innerHTML =
`Available Seats: ${availableSeats}`;

// One user registers for the event
availableSeats--;

// Show updated seat count in the console
console.log(`Seats Remaining: ${availableSeats}`);
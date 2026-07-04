// Event Array
let events = [];

// Function to Add Event
function addEvent(name, category, seats) {
    events.push({
        name: name,
        category: category,
        seats: seats
    });
}

// Function to Register User
function registerUser(eventName) {

    const event = events.find(function(e) {
        return e.name === eventName;
    });

    if (event && event.seats > 0) {
        event.seats--;
        console.log("Registered for " + event.name);
        console.log("Remaining Seats: " + event.seats);
    } else {
        console.log("Registration Failed!");
    }
}

// Function to Filter Events by Category
function filterEventsByCategory(category, callback) {

    const filteredEvents = events.filter(function(event) {
        return event.category === category;
    });

    callback(filteredEvents);
}

// Closure to Track Total Registrations
function registrationCounter(category) {

    let totalRegistrations = 0;

    return function () {
        totalRegistrations++;
        console.log(category + " Registrations: " + totalRegistrations);
    };
}

// Create Closure
const culturalCounter = registrationCounter("Cultural");

// Add Events
addEvent("Music Festival", "Cultural", 30);
addEvent("Tree Plantation", "Environment", 20);
addEvent("Dance Competition", "Cultural", 15);

// Register Users
registerUser("Music Festival");
culturalCounter();

registerUser("Dance Competition");
culturalCounter();

// Callback Function
function displayEvents(eventList) {

    const output = document.getElementById("eventList");

    output.innerHTML = "";

    eventList.forEach(function(event) {
        output.innerHTML += `
            <p>
                <b>${event.name}</b><br>
                Category: ${event.category}<br>
                Seats: ${event.seats}
            </p>
            <hr>
        `;
    });
}

// Filter Cultural Events
filterEventsByCategory("Cultural", displayEvents);
// Event Constructor
function Event(name, category, seats) {
    this.name = name;
    this.category = category;
    this.seats = seats;
}

// Add Method to Prototype
Event.prototype.checkAvailability = function () {
    if (this.seats > 0) {
        return "Seats Available";
    } else {
        return "No Seats Available";
    }
};

// Create Event Object
const event1 = new Event("Music Festival", "Cultural", 25);

// Display Event Details
const output = document.getElementById("eventDetails");

output.innerHTML += `<h3>${event1.name}</h3>`;
output.innerHTML += `<p>Category: ${event1.category}</p>`;
output.innerHTML += `<p>Seats: ${event1.seats}</p>`;
output.innerHTML += `<p>Status: ${event1.checkAvailability()}</p>`;

output.innerHTML += "<h3>Object Properties</h3>";

// List Object Keys and Values
Object.entries(event1).forEach(function(item) {
    output.innerHTML += `<p>${item[0]} : ${item[1]}</p>`;
});
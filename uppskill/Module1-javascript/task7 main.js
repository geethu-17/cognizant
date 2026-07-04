// Event Data
const events = [
    {
        name: "Music Festival",
        seats: 20
    },
    {
        name: "Tree Plantation",
        seats: 15
    }
];

// Access DOM Element using querySelector()
const container = document.querySelector(".eventContainer");

// Display Events
events.forEach(function(event) {

    const card = document.createElement("div");
    card.style.border = "1px solid black";
    card.style.padding = "10px";
    card.style.margin = "10px";

    const title = document.createElement("h3");
    title.textContent = event.name;

    const seats = document.createElement("p");
    seats.textContent = "Available Seats: " + event.seats;

    const registerBtn = document.createElement("button");
    registerBtn.textContent = "Register";

    const cancelBtn = document.createElement("button");
    cancelBtn.textContent = "Cancel";

    // Register Button
    registerBtn.onclick = function () {
        if (event.seats > 0) {
            event.seats--;
            seats.textContent = "Available Seats: " + event.seats;
        } else {
            alert("No Seats Available");
        }
    };

    // Cancel Button
    cancelBtn.onclick = function () {
        event.seats++;
        seats.textContent = "Available Seats: " + event.seats;
    };

    card.appendChild(title);
    card.appendChild(seats);
    card.appendChild(registerBtn);
    card.appendChild(cancelBtn);

    container.appendChild(card);
});
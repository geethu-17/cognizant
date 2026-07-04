// Event List
const events = [
    {
        name: "Tree Plantation",
        date: "2026-07-15",
        seats: 20
    },
    {
        name: "Blood Donation Camp",
        date: "2026-06-20",
        seats: 15
    },
    {
        name: "Food Donation Drive",
        date: "2026-07-20",
        seats: 0
    }
];

const today = new Date("2026-07-04");
const eventList = document.getElementById("eventList");

// Display only upcoming events with available seats
events.forEach(function(event) {

    if (new Date(event.date) > today && event.seats > 0) {
        eventList.innerHTML += `
            <p>
                <b>${event.name}</b><br>
                Date: ${event.date}<br>
                Seats: ${event.seats}
            </p>
            <hr>
        `;
    } else {
        console.log(`${event.name} is hidden.`);
    }

});

// Registration Function
function register(event) {
    try {

        if (event.seats <= 0) {
            throw "Registration Failed! No seats available.";
        }

        event.seats--;
        console.log(`Registration Successful for ${event.name}`);
        console.log(`Remaining Seats: ${event.seats}`);

    } catch (error) {
        console.log(error);
    }
}

// Test Registration
register(events[0]); // Successful
register(events[2]); // Error - No seats
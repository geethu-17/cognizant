// Event List
const events = [
    {
        name: "Music Festival",
        category: "Music",
        seats: 30
    },
    {
        name: "Football Match",
        category: "Sports",
        seats: 25
    },
    {
        name: "Dance Show",
        category: "Music",
        seats: 20
    }
];

// Function with Default Parameter
function displayEvents(eventArray = events) {

    const output = document.getElementById("eventList");
    output.innerHTML = "";

    eventArray.forEach(event => {

        // Destructuring
        const { name, category, seats } = event;

        output.innerHTML += `
            <div style="border:1px solid black; padding:10px; margin:10px;">
                <h3>${name}</h3>
                <p>Category: ${category}</p>
                <p>Seats: ${seats}</p>
            </div>
        `;
    });
}

// Spread Operator to Clone Array
let copiedEvents = [...events];

// Filter Only Music Events
let musicEvents = copiedEvents.filter(event => event.category === "Music");

// Display Events
displayEvents(musicEvents);
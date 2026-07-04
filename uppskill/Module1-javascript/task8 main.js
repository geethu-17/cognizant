// Event Data
const events = [
    { name: "Music Festival", category: "Music" },
    { name: "Football Match", category: "Sports" },
    { name: "JavaScript Workshop", category: "Education" }
];

const eventList = document.getElementById("eventList");
const category = document.getElementById("category");
const search = document.getElementById("search");

// Display Events
function displayEvents(eventArray) {

    eventList.innerHTML = "";

    eventArray.forEach(function(event) {

        const card = document.createElement("div");
        card.style.border = "1px solid black";
        card.style.margin = "10px";
        card.style.padding = "10px";

        card.innerHTML = `
            <h3>${event.name}</h3>
            <p>Category: ${event.category}</p>
        `;

        // Register Button
        const button = document.createElement("button");
        button.textContent = "Register";

        button.onclick = function () {
            alert("Registered for " + event.name);
        };

        card.appendChild(button);
        eventList.appendChild(card);
    });
}

// Initial Display
displayEvents(events);

// Filter using onchange
category.onchange = function () {

    if (category.value === "All") {
        displayEvents(events);
    } else {
        const filtered = events.filter(function(event) {
            return event.category === category.value;
        });

        displayEvents(filtered);
    }
};

// Search using keydown
search.onkeydown = function () {

    setTimeout(function () {

        const text = search.value.toLowerCase();

        const result = events.filter(function(event) {
            return event.name.toLowerCase().includes(text);
        });

        displayEvents(result);

    }, 0);
};
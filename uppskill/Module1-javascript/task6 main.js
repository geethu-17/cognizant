// Array of Events
let events = [];

// Add New Events using push()
events.push({
    name: "Guitar Workshop",
    category: "Music"
});

events.push({
    name: "Workshop on Baking",
    category: "Cooking"
});

events.push({
    name: "Singing Competition",
    category: "Music"
});

events.push({
    name: "Tree Plantation",
    category: "Environment"
});

// Filter Only Music Events
let musicEvents = events.filter(function(event) {
    return event.category === "Music";
});

// Format Display Cards using map()
let displayCards = musicEvents.map(function(event) {
    return `
        <div style="border:1px solid black; padding:10px; margin:10px;">
            <h3>${event.name}</h3>
            <p>Category: ${event.category}</p>
        </div>
    `;
});

// Display on Webpage
document.getElementById("eventList").innerHTML = displayCards.join("");
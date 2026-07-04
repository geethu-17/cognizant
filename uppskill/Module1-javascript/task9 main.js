// Mock API
const apiURL = "https://jsonplaceholder.typicode.com/users";

const loading = document.getElementById("loading");
const eventList = document.getElementById("eventList");

// ----------------------
// Using .then() and .catch()
// ----------------------

fetch(apiURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {

        loading.style.display = "none";

        data.slice(0, 5).forEach(function(event) {
            eventList.innerHTML += `
                <p>${event.name}</p>
            `;
        });

    })
    .catch(function(error) {
        loading.innerHTML = "Failed to load events.";
        console.log(error);
    });

// ----------------------
// Using async / await
// ----------------------

async function getEvents() {

    try {

        loading.style.display = "block";

        const response = await fetch(apiURL);
        const data = await response.json();

        loading.style.display = "none";
        eventList.innerHTML = "";

        data.slice(0, 5).forEach(function(event) {
            eventList.innerHTML += `
                <p>${event.name}</p>
            `;
        });

    } catch (error) {

        loading.innerHTML = "Failed to load events.";
        console.log(error);

    }
}

// Call Async Function
getEvents();
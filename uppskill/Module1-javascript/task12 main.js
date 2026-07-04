const form = document.getElementById("registrationForm");
const message = document.getElementById("message");

// Mock API
const apiURL = "https://jsonplaceholder.typicode.com/posts";

form.addEventListener("submit", function (event) {

    event.preventDefault();

    // User Data
    const userData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        event: document.getElementById("event").value
    };

    // Send Data to Mock API
    fetch(apiURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    })
    .then(function(response) {

        if (!response.ok) {
            throw new Error("Request Failed");
        }

        return response.json();
    })
    .then(function(data) {

        console.log(data);
        message.style.color = "green";
        message.textContent = "Registration Successful!";

    })
    .catch(function(error) {

        console.log(error);
        message.style.color = "red";
        message.textContent = "Registration Failed!";

    });

});
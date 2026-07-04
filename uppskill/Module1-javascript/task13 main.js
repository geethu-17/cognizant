const form = document.getElementById("registrationForm");
const message = document.getElementById("message");

form.addEventListener("submit", function (event) {

    // Prevent page refresh
    event.preventDefault();

    console.log("Form submission started");

    // Get form values
    const userData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        event: document.getElementById("event").value
    };

    console.log("User Data:", userData);

    // Add a breakpoint for debugging
    debugger;

    // Send data to mock API
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    })
    .then(function(response) {

        console.log("Response Status:", response.status);
        return response.json();

    })
    .then(function(data) {

        console.log("Server Response:", data);
        message.textContent = "Registration Successful!";

    })
    .catch(function(error) {

        console.log("Error:", error);
        message.textContent = "Registration Failed!";

    });

});
WelcomeSpeech();

// Call the function to WelcomeSpeech
function WelcomeSpeech() {
    let Username = prompt("What is your name?");
    if (Username != '') {
        document.getElementById("user-greeting").textContent = Username;
    }
}

// Function to handle form submission
function handleFormSubmit() {
    let nameInput = document.getElementById("name").value.trim();
    let emailInput = document.getElementById("email").value.trim();
    let messageInput = document.getElementById("message").value.trim();

    if (nameInput === '' || emailInput === '' || messageInput === '') {
        alert("Please fill in the required field on main form.");
    } else if (!emailInput.includes('@')) {
        alert("Please enter a valid email address with '@'.");
    } else {
        alert("Message sent!\nName: " + nameInput + "\nEmail: " + emailInput + "\nMessage: " + messageInput);

        // Show the message below the form
        document.getElementById("message-display").innerHTML =
            `<strong>Name:</strong> ${nameInput}<br>
             <strong>Email:</strong> ${emailInput}<br>
             <strong>Message:</strong> ${messageInput}`;
    }
}
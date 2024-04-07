// subscribing.js


// Wait for the HTML document to finish loading before executing any code
document.addEventListener('DOMContentLoaded', function() {
    // Get the form element with the ID 'subscribe-form' and store it in the 'subscribeForm' variable
    const subscribeForm = document.getElementById('subscribe-form');
    // Get the email input element with the ID 'email' and store it in the 'emailInput' variable
    const emailInput = document.getElementById('email');

    // Add an event listener to the form for the 'submit' event
    subscribeForm.addEventListener('submit', function(event) {
        // Prevent the default form submission behavior (e.g., reloading the page)
        event.preventDefault();

        // Get the value entered into the email input field and remove any leading or trailing whitespace
        const email = emailInput.value.trim();

        // Check if the email input is not empty
        if (email !== '') {
            // If the email is not empty, display a thank you message
            alert('Thank you for subscribing!');
            // Clear the email input field
            emailInput.value = '';
        } else {
            // If the email is empty, display an alert asking the user to enter a valid email address
            alert('Please enter a valid email address.');
        }
    });
});


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

// Slideshow Index Page

// Initialize slideIndex to 1 (the first slide)
let slideIndex = 1;
// Display the first slide when the page loads
showSlides(slideIndex);

// Function to navigate to the next or previous slide
function plusSlides(n) {
  // Call showSlides function with incremented/decremented slideIndex
  showSlides(slideIndex += n);
}

// Function to navigate to a specific slide
function currentSlide(n) {
  // Call showSlides function with the given slideIndex
  showSlides(slideIndex = n);
}

// Function to display slides
function showSlides(n) {
  let i;
  // Get all elements with the class "mySlides" (assumed to be slides)
  let slides = document.getElementsByClassName("mySlides");
  // Get all elements with the class "dot" (assumed to be slide indicators/thumbnails)
  let dots = document.getElementsByClassName("dot");
  // If slide index is greater than the number of slides, reset to the first slide
  if (n > slides.length) {
    slideIndex = 1;
  }
  // If slide index is less than 1, set it to the last slide
  if (n < 1) {
    slideIndex = slides.length;
  }
  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // Remove "active" class from all slide indicators/thumbnails
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  // Display the current slide
  slides[slideIndex - 1].style.display = "block";
  // Add "active" class to the current slide indicator/thumbnail
  dots[slideIndex - 1].className += " active";
}
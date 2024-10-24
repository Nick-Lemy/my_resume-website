// Array of titles to be displayed in the typing animation
let titles = [
    "Software Engineering Student",
    "Junior Mobile App Dev",
    "Cybersecurity Enthousiast",
]

// Variables for the slider, humburger menu and menu
const span = document.getElementById("demo");
const slides = document.querySelectorAll(".certificates-slider img");
let index = 0;
let intervalId = null;
var i = 0;
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".nav-bar-right ul");
var isDispled = false;

// Function to handle the typing animation of titles
function total() {
    let j = 0;
    let i = 0;

    // Function to type out each character of the current title
    function typeTitle() {
        if (j < titles.length) {
            if (i < titles[j].length) {
                span.innerHTML += titles[j].charAt(i);
                i++;
                setTimeout(typeTitle, 200);
            } else {
                setTimeout(() => {
                    span.innerHTML = "";
                    i = 0;
                    j++;
                    setTimeout(typeTitle, 500);
                }, 500);
            }
        } else {
            j = 0;
            setTimeout(typeTitle, 500);
        }
    }

    typeTitle();
}

// Start the typing animation when the DOM content is loaded
document.addEventListener("DOMContentLoaded", total);

// Initialize the slider when the DOM content is loaded
document.addEventListener("DOMContentLoaded", initializeSlider);

// Function to initialize the slider
function initializeSlider() {
    if (slides.length > 0) {
        slides[index].classList.add("displaySlide");
    }
}

// Function to show a specific slide based on the index
function showSlide(indexs) {
    if (indexs >= slides.length) {
        index = 0;
    } else if (indexs < 0) {
        index = slides.length - 1;
    }

    // Remove the display class from all slides
    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[index].classList.add("displaySlide");
}

// Function to show the previous slide
function prevSlide() {
    clearInterval(intervalId);
    index--;
    showSlide(index);
}

// Function to show the next slide
function nextSlide() {
    index++;
    showSlide(index);
}

// Function to handle hamburger menu
function menuDisplayed() {
    if (window.innerWidth <= 768) { // Check if the screen width is less than or equal to 768px
        if (isDispled) {
            menu.style.display = "flex"; // Display menu
        } else {
            menu.style.display = "none"; // Hide menu
        }
    } else {
        menu.style.display = "flex"; // Always display the menu on larger screens
    }
}

// Function to validate the contact form
const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    if (name === "") {
        alert('Please enter your name.');
        return;
    }

    if (!emailIsValid(email) || email.length === "") {
        alert('Please enter a valid email address.');
        return;
    }

    if (message === "") {
        alert('Please enter a message.');
        return;
    }
    // If validation passes, submit the form
    form.submit();
});

function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}


// Toggle menu display on hamburger click
hamburger.addEventListener("click", () => {
    isDispled = !isDispled;
    menuDisplayed();
});

// Ensure the menu is displayed correctly on page load and when resizing the window
document.addEventListener("DOMContentLoaded", menuDisplayed);
window.addEventListener("resize", menuDisplayed);

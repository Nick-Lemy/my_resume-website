// Array of titles to be displayed in the typing animation
let titles = [
    "Software Engineering Student",
    "Junior Mobile App Dev",
    "Cybersecurity Enthousiast",
]

// Variables for the slider
const span = document.getElementById("demo");
const slides = document.querySelectorAll(".certificates-slider img");
let index = 0;
let intervalId = null;
var i = 0;

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
                setTimeout(typeTitle, 200); // Delay between each character
            } else {
                setTimeout(() => {
                    span.innerHTML = "";
                    i = 0;
                    j++;
                    setTimeout(typeTitle, 500); // Delay before typing the next title
                }, 500); // Delay after finishing a title
            }
        } else {
            j = 0;
            setTimeout(typeTitle, 500); // Delay before restarting the animation
        }
    }

    typeTitle(); // Start the typing animation
}

// Start the typing animation when the DOM content is loaded
document.addEventListener("DOMContentLoaded", total);

// Initialize the slider when the DOM content is loaded
document.addEventListener("DOMContentLoaded", initializeSlider);

// Function to initialize the slider
function initializeSlider() {
    if (slides.length > 0) {
        slides[index].classList.add("displaySlide"); // Display the first slide
    }
}

// Function to show a specific slide based on the index
function showSlide(indexs) {
    if (indexs >= slides.length) {
        index = 0; // Loop back to the first slide
    } else if (indexs < 0) {
        index = slides.length - 1; // Loop back to the last slide
    }

    // Remove the display class from all slides
    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[index].classList.add("displaySlide"); // Display the current slide
}

// Function to show the previous slide
function prevSlide() {
    clearInterval(intervalId); // Clear the interval to stop automatic sliding
    index--;
    showSlide(index); // Show the previous slide
}

// Function to show the next slide
function nextSlide() {
    index++;
    showSlide(index); // Show the next slide
}
// just playin' a bit u know

let titles = [
    "Software Engineering Student",
    "Junior Mobile App Dev",
    "Cybersecurity Enthousiast",
]

const span = document.getElementById("demo");
const slides = document.querySelectorAll(".certificates-slider img");
let index = 0;
let intervalId = null;
var i = 0;

function total() {
    let j = 0;
    let i = 0;

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

document.addEventListener("DOMContentLoaded", total);

// initializeSlider();

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){
    if(slides.length > 0){
        slides[index].classList.add("displaySlide");
    }

}

function showSlide(indexs){

    if(indexs >= slides.length ){
        index = 0;
    } else if(indexs < 0){
        index = slides.length - 1;
    }


   slides.forEach(slide => {
    slide.classList.remove("displaySlide");
   });
   slides[index].classList.add("displaySlide");
}

function prevSlide(){
    clearInterval(intervalId);
    index--;
    showSlide(index);
}

function nextSlide(){
    index++;
    showSlide(index);
}
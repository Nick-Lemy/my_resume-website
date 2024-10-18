const slides = document.querySelectorAll(".certificates-slider img");
let index = 0;
let intervalId = null;

// initializeSlider();

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){
    if(slides.length > 0){
        slides[index].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 5000);
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
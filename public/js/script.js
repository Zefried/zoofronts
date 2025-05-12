// slider1
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');
const totalSlides = slides.length;

function updateSlider() {
    const slideWidth = slides[0].offsetWidth;
    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

function nextSlide() {
    if (currentIndex < totalSlides - 3) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateSlider();
}

function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalSlides - 3;
    }
    updateSlider();
}

window.addEventListener('resize', updateSlider);
updateSlider();


// Slider2

let currentIndex2 = 0;
const slides2 = document.querySelectorAll('.slide2');
const slider2 = document.querySelector('.slider2');
const totalSlides2 = slides2.length;

function updateSlider2() {
    const slideWidth = slides2[0].offsetWidth;
    slider2.style.transform = `translateX(-${currentIndex2 * slideWidth}px)`;
}

function nextSlide2() {
    if (currentIndex2 < totalSlides2 - 3) {
        currentIndex2++;
    } else {
        currentIndex2 = 0;
    }
    updateSlider2();
}

function prevSlide2() {
    if (currentIndex2 > 0) {
        currentIndex2--;
    } else {
        currentIndex2 = totalSlides2 - 3;
    }
    updateSlider2();
}

window.addEventListener('resize', updateSlider2);
updateSlider2();

// Slider3

let currentIndex3 = 0;
const slides3 = document.querySelectorAll('.slide3');
const slider3 = document.querySelector('.slider3');
const totalSlides3 = slides3.length;

function updateSlider3() {
    const slideWidth = slides3[0].offsetWidth;
    slider3.style.transform = `translateX(-${currentIndex3 * slideWidth}px)`;
}

function nextSlide3() {
    if (currentIndex3 < totalSlides3 - 3) {
        currentIndex3++;
    } else {
        currentIndex3 = 0;
    }
    updateSlider3();
}

function prevSlide3() {
    if (currentIndex3 > 0) {
        currentIndex3--;
    } else {
        currentIndex3 = totalSlides3 - 3;
    }
    updateSlider3();
}

window.addEventListener('resize', updateSlider3);
updateSlider3();

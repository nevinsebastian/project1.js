const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

//Button

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'; 

//Button Listeners

nextBtn.addEventListener('click',() =>{

    carouselSlide.style.transition = "transform -.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'; 
})

prevBtn.addEventListener('click', () => {
    carouselSlide.style.transition = "transform -.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'; 
})

carouselSlide.addEventListener('transitionend',() => {
    if (counter === carouselImages.length - 1){
        carouselSlide.style.transition = "none";
        counter = 1;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'; 
    }
})

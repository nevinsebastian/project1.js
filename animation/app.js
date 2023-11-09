const carouselSlide = document.querySelector('.carousel-slide');
const carouselImage = document.querySelectorAll('.carousel-slide img');

//nutton

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#prevBtn');

let counter = 1;
const size = carouselImage[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px'

// script.js
document.addEventListener("DOMContentLoaded", function() {
  const carousel = document.querySelector('.carousel');
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const thumbnails = document.querySelectorAll('.thumbnail');

  let slideIndex = 0;
  const totalSlides = slides.length;

  function showSlide(index) {
    // Wrap around if index is out of bounds
    if (index < 0) {
      slideIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
      slideIndex = 0;
    }

    // Hide all slides
    slides.forEach(slide => {
      slide.style.transform = `translateX(-${slideIndex * 100}%)`;
    });
  }

  // Next slide
  nextBtn.addEventListener('click', () => {
    slideIndex++;
    showSlide(slideIndex);
  });

  // Previous slide
  prevBtn.addEventListener('click', () => {
    slideIndex--;
    showSlide(slideIndex);
  });

  // Thumbnail click events
  thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
      showSlide(index);
    });
  });

});

const menu = document.getElementById('menu');
const tgl = document.getElementById('tgl');

const tog = () => menu.classList.toggle("hidden");
tgl.addEventListener("click", tog);

const slides = document.querySelectorAll(".slide");

// loop through slides and set each slides translateX
slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});

// select next slide button
const nextSlide = document.querySelector(".cbtn-next");

// current slide counter
let curSlide = 0;
// maximum number of slides
let maxSlide = slides.length - 1;

// add event listener and navigation functionality
nextSlide.addEventListener("click", function () {
  // check if current slide is the last and reset current slide
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  //   move slide by -100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

// select next slide button
const prevSlide = document.querySelector(".cbtn-prev");

// add event listener and navigation functionality
prevSlide.addEventListener("click", function () {
  // check if current slide is the first and reset current slide to last
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

  //   move slide by 100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});


// Testimonials

const testimonials = document.querySelectorAll(".testimonial");

// loop through slides and set each slides translateX
testimonials.forEach((testimonial, indx) => {
  testimonial.style.transform = `translateX(${indx * 100}%)`;
});

// select next slide button
const nextTestimonial = document.querySelector(".tbtn-next");

// current slide counter
let curTestimonial = 0;
// maximum number of slides
let maxTestimonial = testimonials.length - 1;

// add event listener and navigation functionality
nextTestimonial.addEventListener("click", function () {
  // check if current slide is the last and reset current slide
  if (curTestimonial === maxTestimonial) {
    curTestimonial = 0;
  } else {
    curTestimonial++;
  }

  //   move slide by -100%
  testimonials.forEach((testimonial, indx) => {
    testimonial.style.transform = `translateX(${100 * (indx - curTestimonial)}%)`;
  });
});

// select next slide button
const prevTestimonial = document.querySelector(".tbtn-prev");

// add event listener and navigation functionality
prevTestimonial.addEventListener("click", function () {
  // check if current slide is the first and reset current slide to last
  if (curTestimonial === 0) {
    curTestimonial = maxTestimonial;
  } else {
    curTestimonial--;
  }

  //   move slide by 100%
  testimonials.forEach((testimonial, indx) => {
    testimonial.style.transform = `translateX(${100 * (indx - curTestimonial)}%)`;
  });
});
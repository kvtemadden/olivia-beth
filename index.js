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
const slideIndex = 0;
var dots = document.getElementsByClassName("dot");

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
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // check if current slide is the last and reset current slide
  if (curTestimonial === maxTestimonial) {
    curTestimonial = 0;
  } else {
    curTestimonial++;
  }

  dots[curTestimonial].className += " active";

  //   move slide by -100%
  testimonials.forEach((testimonial, indx) => {
    testimonial.style.transform = `translateX(${100 * (indx - curTestimonial)}%)`;
  });
});

// select next slide button
const prevTestimonial = document.querySelector(".tbtn-prev");

// add event listener and navigation functionality
prevTestimonial.addEventListener("click", function () {

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // check if current slide is the first and reset current slide to last
  if (curTestimonial === 0) {
    curTestimonial = maxTestimonial;

  } else {
    curTestimonial--;
  }

  dots[curTestimonial].className += " active";

  //   move slide by 100%
  testimonials.forEach((testimonial, indx) => {
    testimonial.style.transform = `translateX(${100 * (indx - curTestimonial)}%)`;
  });

});

// const product = document.querySelectorAll('.product-item');

// for (var i = 0; i < product.length; i++) {
//   product[i].addEventListener("click", function (event) {
//     selectProduct(event);
//   });
// }

var selectedExtras = {
  items: [],
  totalCost: 0,
  estTime: 0,
  measure: ""
};

var selectItem = (e) => {

  document.querySelector('#' + e + "-item").classList.toggle("border-primary");
  document.querySelector('#' + e).parentElement.classList.toggle("hidden");
  
  let selectedItemTitle = document.querySelector('.' + e + "-item-title").getAttribute("data-title");
  let selectedItemPriceString = document.querySelector('.' + e + "-item-price").getAttribute("data-price");
  let selectedItemPrice = parseInt(selectedItemPriceString);
  let selectedItemTimeString = document.querySelector('.' + e + "-item-title").getAttribute("data-time");
  let selectedItemTime = parseInt(selectedItemTimeString);

  if (document.querySelector('#' + e).parentElement.classList.contains("hidden")) {
    
    let remove = {title: selectedItemTitle, price: selectedItemPrice, time: selectedItemTime};
    selectedExtras.items.splice(selectedExtras.items.findIndex(a => a.title === remove.title) , 1)

  }
  else {

    selectedExtras.items.push({ title: selectedItemTitle, price: selectedItemPrice, time: selectedItemTime });

  }

  var sum = (selectedExtras.items).reduce((accumulator, object) => {
    return accumulator + object.price;
  }, 0);

  var sumTime = (selectedExtras.items).reduce((accumulator, object) => {
    return accumulator + object.time;
  }, 0);

  var weeks = Math.floor(sumTime / 7);

  weeks > 0 ? (selectedExtras.estTime = weeks, selectedExtras.measure = "weeks") : (selectedExtras.estTime = sumTime, selectedExtras.measure = "days");
  

  selectedExtras.totalCost = sum;

  if (selectedExtras.items.length == 1 && selectedExtras.items[0].title == "faster-turnaround") {
    document.querySelector("#est-time").innerHTML = "";
    document.querySelector("#est-cost").innerHTML = "£" + selectedExtras.totalCost;

  } else if (selectedExtras.items.length) {
    document.querySelector("#est-time").innerHTML = selectedExtras.estTime + " " + selectedExtras.measure;
    document.querySelector("#est-cost").innerHTML = "£" + selectedExtras.totalCost;
    
  } else {
    document.querySelector("#est-time").innerHTML = "";
    document.querySelector("#est-cost").innerHTML = "";
  }
}

const scroll = new LocomotiveScroll({
 el: document.querySelector('#main'),
 smooth: true
});

const eventsContainer = document.querySelector(".events-container");
const fixedImage = document.querySelector(".fixed-image");

eventsContainer.addEventListener('mouseenter', () => {
  fixedImage.style.display = "block";
});

eventsContainer.addEventListener('mouseleave', () => {
  fixedImage.style.display = "none";
});

const eventItems = document.querySelectorAll(".events");

eventItems.forEach((e) => {
  e.addEventListener('mouseenter', () => {
    let dataImage = e.getAttribute('data-image')
    fixedImage.style.backgroundImage = `url(${dataImage})` 
  })
})

document.addEventListener('DOMContentLoaded', () => {
  var links = document.querySelectorAll('.left-heading a');
  links.forEach((link) => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      links.forEach(function(item) {
        item.classList.remove('clicked');
      });
      this.classList.add('clicked');
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  var links = document.querySelectorAll('.left-heading a');
  links.forEach((link) => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      links.forEach(function(item) {
        item.classList.remove('selected');
      });
      this.classList.add('selected');
    });
  });
});

const dataAnchors = document.querySelectorAll(".left-heading a");

dataAnchors.forEach((i) => {
  i.addEventListener('click', () => {
    let dataDesc = i.getAttribute('data-description');
    let dataPicture = i.getAttribute('data-picture')
    const changePara = document.querySelector('.para-details');
    const changeImage = document.querySelector(".steps-right")
    changePara.textContent = dataDesc;
    changeImage.style.backgroundImage = `url(${dataPicture})`
  });
});

var swiper = new Swiper(".mySwiper", {
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
    
const hamburgerMenu = document.querySelector("nav h3");
const fullScreen = document.querySelector(".full-scr");
const navImg = document.querySelector("nav img")
let flag = 0;
hamburgerMenu.addEventListener("click", () => {
  if (flag === 0) {
  fullScreen.style.top = 0
  navImg.style.opacity = 0
  flag = 1
  } else {
    fullScreen.style.top = "-100%"
    navImg.style.opacity = 1
    flag = 0
  }
})

let loader = document.querySelector(".loader")

setTimeout(() => {
  loader.style.display = "none"
},4000)
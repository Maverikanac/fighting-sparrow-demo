'use strict'

// Selectors
const header = document.querySelector('.header');
const we = document.querySelector('.we');
const img = document.querySelectorAll('.members--img');
const imgTargets = document.querySelectorAll('img[data-src]');
const home = document.querySelector('.home');
const bio = document.querySelector('#bio');
const contact = document.querySelector('#contact');
const links = document.querySelector('#links');
const navBar = document.querySelector('.nav-bar');
const nav = document.querySelector('nav');

const openModalButtons = document.querySelectorAll('a');
const closeModalButtons = document.querySelectorAll('.closeBtn');
const overlay = document.getElementById('overlay');

///////////////////////////////////////////////////
// Modals (navigation)

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.target);
    console.log(modal);
    openModal(modal);
  });

  console.log(button);
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
};

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    closeModal(modal);
  });
});

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
};

///////////////////////////////////////////
// Blur images
const blur = function () {
  img.classList.add('lazy--img')
};

// Fade In onload
window.onload = (e) => {
  we.classList.add('fade');
  header.classList.add('fade');
};

//////////////////////
// Menu fade
const handleHover = function (e) {
  if(e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav__links').querySelectorAll('.nav__link');
    const logo = link.closest('.nav-bar').querySelector('.header--img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity.this;
  }
};


// "nav listeners"

navBar.addEventListener('mouseover', handleHover.bind(0.5));
navBar.addEventListener('mouseout', handleHover.bind(1));

// Sticky navigation - Intersection Observer API
// const navHeight = nav.getBoundingClientRect().height;

// const stickyNav = function(entries) {
//   const [entry] = entries;
//   // console.log(entry);

//   if(!entry.isIntersecting) {
//     nav.classList.add('sticky');
//   } else nav.classList.remove('sticky');
// };

// const headerObserver = new IntersectionObserver(stickyNav, {
//   root: null,
//   threshold: 0.7,
//   rootMargin: `-${navHeight}px`,
// });

// headerObserver.observe(we);

// Lazy loading imgs

// if(!('IntersectionObserver' in window)) {
//   Array.from(imgTargets).forEach(image => preloadImage(image))
// };

// const preloadImage = function(element) {
//   if(element.dataset && element.dataset.src) {
//     element.src = element.dataset.src;
//   }
// };

// const loadImg = function(entries, observer) {
//   const [entry] = entries
//   if(entry.isIntersecting) {
//     // Replace src with data-src
//     entry.target.src = entry.target.dataset.src;
    
//     entry.target.addEventListener('load', function(){
//       entry.target.classList.remove('lazy-img');
//     });
//   };
//   observer.unobserve(entry.target);
// };

// const imgObserver = new IntersectionObserver(loadImg, {
//   root: null,
//   threshold: 0.01,
//   rootMargin: '50px',
// });

// imgTargets.forEach(img => imgObserver.observe(img));

document.addEventListener("DOMContentLoaded", function () {
  const imageObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting) {
        const lazyImage = entry.target
        console.log("lazy loading", lazyImage);
        lazyImage.src = lazyImage.dataset.src;
        lazyImage.classList.remove('lazy-img');
        imgObserver.unobserve(lazyImage);
      }
    })
  });
  const arr = img.forEach((i) => imageObserver.observe(i));
});
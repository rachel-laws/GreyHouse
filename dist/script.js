// Mobile Navigation

const nav = document.querySelector('#navList');
const navLinks = document.querySelector('nav a');
const mobileNavBtn = document.querySelector('#toggleMobileNav');
const mobileNavBtnIcon = document.querySelector('#toggleMobileNav i');
const navLinkNotCurrent = document.querySelector(
  'a:not([aria-current="page"])'
);

mobileNavBtn.addEventListener('click', e => {
  if (nav.classList.contains('showMobileNav')) {
    mobileNavBtn.setAttribute('aria-expanded', 'false');
    mobileNavBtnIcon.classList.replace('bi-x-lg', 'bi-list');
    nav.classList.remove('showMobileNav');
  } else {
    mobileNavBtn.setAttribute('aria-expanded', 'true');
    mobileNavBtnIcon.classList.replace('bi-list', 'bi-x-lg');
    nav.classList.add('showMobileNav');
  }
});

// Active Page Underline

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('nav a').forEach(link => {
    if (link.href === window.location.href) {
      link.setAttribute('aria-current', 'page');
    }
  });
});

// Image Carousel

function preloadImages(imageSources) {
  for (const source of imageSources) {
    const img = new Image();
    img.src = source;
  }
}

const headerImageSources = ['/assets/header_1.jpg', '/assets/header_2.jpg'];

preloadImages(headerImageSources);

function executeOnLargeScreen(callback) {
  if (window.innerWidth > 650) {
    callback();
  }
}

function changeHeaderImg() {
  const headerImg = document.querySelector('.home__headerImg-container');
  if (headerImg) {
    const headerImgSrc = [
      'url("/assets/header_1.jpg")',
      'url("/assets/header_2.jpg")',
    ];

    let currentIndex = 0;

    setInterval(function () {
      headerImg.style.backgroundImage = headerImgSrc[currentIndex];
      currentIndex = (currentIndex + 1) % headerImgSrc.length;
    }, 12000);
  }
}

executeOnLargeScreen(changeHeaderImg);

// Fade In

// let isLoaded = false;

// window.onload = function fadeInBody() {
//   if (isLoaded) {
//     return;
//   }
//   isLoaded = true;
//   const body = document.body;
//   body.style.opacity = 0;
//   body.style.animation = 'fadeIn 300ms ease 1';

//   setTimeout(function () {
//     body.style.opacity = 1;
//     console.log('hi');
//   }, 300);
// };

// Contact Form Submission

const contactForm = document.querySelector('#contactForm');
const submitMessage = document.querySelector('#formMessage');

if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    contactForm.reset();
    setTimeout(function () {
      submitMessage.style.color = 'white';
    }, 250);
  });
}

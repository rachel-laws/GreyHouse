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

function changeHeaderImg() {
  const headerImg = document.querySelector('#headerImg');
  const headerImgSrc = [
    'url("/assets/header_1.jpg")',
    'url("/assets/header_2.jpg")',
    'url("/assets/header_3.jpg")',
  ];

  let currentIndex = 0;

  setInterval(function () {
    headerImg.style.backgroundImage = headerImgSrc[currentIndex];
    currentIndex++;

    if (currentIndex >= headerImgSrc.length) {
      currentIndex = 0;
    }
  }, 10000);
}
changeHeaderImg();

// Fade In
let isLoaded = false;

window.onload = function fadeInBody() {
  if (isLoaded) {
    return;
  }
  isLoaded = true;
  const body = document.body;
  body.style.opacity = 0;
  body.style.animation = 'fadeIn 300ms ease 1';

  setTimeout(function () {
    body.style.opacity = 1;
    console.log('hi');
  }, 300);
};

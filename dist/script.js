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
  const rewrittenHomeURL = 'https://lawsonwebdevelopment.com/';
  const rewrittenMenuURL = 'https://www.lawsonwebdevelopment.com/menu';
  const rewrittenContactURL = 'https://www.lawsonwebdevelopment.com/contact';

  document.querySelectorAll('nav a').forEach(link => {
    const href = link.getAttribute('href');

    if (
      href === rewrittenHomeURL &&
      window.location.href === rewrittenHomeURL
    ) {
      link.setAttribute('aria-current', 'page');
    } else if (
      href === rewrittenMenuURL &&
      window.location.href === rewrittenMenuURL
    ) {
      link.setAttribute('aria-current', 'page');
    } else if (
      href === rewrittenContactURL &&
      window.location.href === rewrittenContactURL
    ) {
      link.setAttribute('aria-current', 'page');
    }
  });
});

// Sticky Navbar (for bug fix)

window.addEventListener('load', () => {
  const navbar = document.querySelector('#navbar');
  const navOffset = navbar.offsetTop;

  window.addEventListener('scroll', () => {
    if (window.scrollY >= navOffset) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
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

const headerImageSources = [
  '/assets/header_1-small.jpg',
  '/assets/header_2-small.jpg',
  '/assets/header_1.jpg',
  '/assets/header_2.jpg',
  '/assets/contact.jpg',
];

preloadImages(headerImageSources);

function executeOnLargeScreen(callback) {
  if (window.innerWidth > 650) {
    callback();
  }
}

function changeHeaderImg() {
  const headerImg = document.querySelector('.home__headerImg-container');
  if (headerImg) {
    setInterval(function () {
      headerImg.classList.toggle('headerImg-2');
      headerImg.classList.toggle('headerImg-1');
    }, 24000);
  }
}

executeOnLargeScreen(changeHeaderImg);

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

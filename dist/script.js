//* Mobile Navigation

const nav = document.querySelector('#navList');
const navbar = document.querySelector('#navbar');
const navLinks = document.querySelector('nav a');
const mobileNavBtn = document.querySelector('#toggleMobileNav');
const mobileNavBtnIcon = document.querySelector('#toggleMobileNav i');
const navLinkNotCurrent = document.querySelector(
  'a:not([aria-current="page"])'
);

// Sticky Navbar (for position: sticky bug fix)

window.addEventListener('load', () => {
  const navOffset = navbar.offsetTop;

  window.addEventListener('scroll', () => {
    if (window.scrollY >= navOffset) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
  });
});

// Show / Hide Navbar

mobileNavBtn.addEventListener('click', e => {
  if (nav.classList.contains('showMobileNav')) {
    hideNavbar(nav);
  } else {
    showNavbar(nav);
  }
});

// Close when clicking outside navbar

document.addEventListener('click', function handleClickOutsideBox(event) {
  if (nav.classList.contains('showMobileNav')) {
    if (!nav.contains(event.target) && !navbar.contains(event.target)) {
      hideNavbar(nav);
    }
  }
});

// Helper Functions

const hideNavbar = nav => {
  mobileNavBtn.setAttribute('aria-expanded', 'false');
  mobileNavBtnIcon.classList.replace('bi-x-lg', 'bi-list');
  nav.classList.add('hideMobileNav');
  setTimeout(() => {
    nav.classList.remove('showMobileNav');
    nav.classList.remove('hideMobileNav');
  }, 150);
};

const showNavbar = nav => {
  mobileNavBtn.setAttribute('aria-expanded', 'true');
  mobileNavBtnIcon.classList.replace('bi-list', 'bi-x-lg');
  nav.classList.add('showMobileNav');
};

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

//* Image Carousel

// Preload

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

// Change Images

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

//* Contact Form Submission

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

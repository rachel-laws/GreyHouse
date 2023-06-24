// Mobile Navigation

const nav = document.querySelector('#navList');
const navLinks = document.querySelector('nav a');
const mobileNavBtn = document.querySelector('#toggleMobileNav');

mobileNavBtn.addEventListener('click', e => {
  if (nav.classList.contains('showMobileNav')) {
    mobileNavBtn.setAttribute('aria-expanded', 'false');
    nav.classList.remove('showMobileNav');
  } else {
    mobileNavBtn.setAttribute('aria-expanded', 'true');
    nav.classList.add('showMobileNav');
  }
});

// Active Page Underline

document.querySelectorAll('nav a').forEach(link => {
  if (link.href === window.location.href) {
    link.setAttribute('aria-current', 'page');
  }
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

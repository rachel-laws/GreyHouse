// Mobile Navigation

const nav = document.querySelector('#navList');
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

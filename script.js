// script.js

let lastScrollTop = 0; // Track the last scroll position
const header = document.getElementById('header'); // Get the header element

window.addEventListener('scroll', function() {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  console.log('Current Scroll: ', currentScroll); // Debugging to check scroll position

  if (currentScroll > lastScrollTop) {
    // Scrolling down, hide the header
    header.style.transform = 'translateY(-100%)';
  } else {
    // Scrolling up, show the header
    header.style.transform = 'translateY(0)';
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative scroll values
});

//active
document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('.navbar ul li a');
  const currentLocation = window.location.href;
  links.forEach(link => {
      if (link.href === currentLocation) {
          link.classList.add('active');
      } else {
          link.classList.remove('active');
      }
  });
});

///Hindari Cross-Site Scripting (XSS)
function sanitizeInput(input) {
  const temp = document.createElement('div');
  temp.textContent = input;
  return temp.innerHTML;
}
const safeContent = sanitizeInput(userInput);

//JavaScript untuk Fungsionalitas
const menuBtn = document.getElementById('menu-btn');
const navbar = document.getElementById('navbar');

// Debugging untuk memeriksa apakah elemen ditemukan
if (menuBtn && navbar) {
  menuBtn.addEventListener('click', () => {
    console.log('Hamburger menu clicked!'); // Debugging klik
    navbar.classList.toggle('active'); // Toggle kelas 'active'
  });
} else {
  console.error('Menu button or navbar not found!');
}



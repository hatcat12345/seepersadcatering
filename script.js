// Hero background slideshow
const heroImages = [
  'attachments/1000065457.jpg',
  'attachments/1000065460.jpg',
  'attachments/1000065465.jpg'
];

let currentIndex = 0;
const hero = document.querySelector('header.hero');

function changeBackground() {
  hero.style.backgroundImage = `url(${heroImages[currentIndex]})`;
  currentIndex = (currentIndex + 1) % heroImages.length;
}

setInterval(changeBackground, 5000); // change every 5 seconds

// On load, set initial image
window.addEventListener('load', () => {
  hero.style.backgroundImage = `url(${heroImages[0]})`;
});

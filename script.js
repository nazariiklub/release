const toggle = document.getElementById('theme-toggle');

// Якщо за замовчуванням темна тема, ставимо атрибут і чек
document.body.setAttribute('theme', 'dark');
toggle.checked = true;

toggle.addEventListener('click', () => {
  document.body.setAttribute('theme', toggle.checked ? 'dark' : 'light');
});

const slides = document.querySelectorAll('.slide');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
let current = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${100 * (i - index)}%)`;
  });
}

next.addEventListener('click', () => {
  current = (current + 1) % slides.length;
  showSlide(current);
});

prev.addEventListener('click', () => {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
});

showSlide(current);


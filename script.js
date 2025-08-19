const toggle = document.getElementById('theme-toggle');
const slides = document.querySelectorAll('.slide');
const slidesContainer = document.querySelector('.slides');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const dotsContainer = document.querySelector('.dots');

let current = 0;
let interval;


function applyTheme(theme) {
  document.body.setAttribute('theme', theme);
  toggle.checked = theme === 'dark'; 
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  applyTheme(savedTheme);
} else {
  applyTheme('dark'); 
}

toggle.addEventListener('click', () => {
  const newTheme = toggle.checked ? 'dark' : 'light';
  applyTheme(newTheme);
  localStorage.setItem('theme', newTheme); 
});


function createDots() {
  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
      current = i;
      updateSlider();
      resetInterval();
    });
    dotsContainer.appendChild(dot);
  });
}
createDots();

function updateSlider() {
  slidesContainer.style.transform = `translateX(-${current * 100}%)`;
  document.querySelectorAll('.dots button').forEach((dot, i) => {
    dot.classList.toggle('active', i === current);
  });
}


next.addEventListener('click', () => {
  current = (current + 1) % slides.length;
  updateSlider();
  resetInterval();
});

prev.addEventListener('click', () => {
  current = (current - 1 + slides.length) % slides.length;
  updateSlider();
  resetInterval();
});


function autoPlay() {
  interval = setInterval(() => {
    current = (current + 1) % slides.length;
    updateSlider();
  }, 4000);
}

function resetInterval() {
  clearInterval(interval);
  autoPlay();
}


slidesContainer.addEventListener('mouseenter', () => {
  clearInterval(interval); 
});

slidesContainer.addEventListener('mouseleave', () => {
  autoPlay(); 
});

updateSlider();
autoPlay();

setTimeout(() => {
  const modal = document.getElementById("sideModal");
  modal.classList.add("show");
}, 30000);

document.querySelector("#sideModal .close").onclick = () => {
  document.getElementById("sideModal").classList.remove("show");
};


document.addEventListener("DOMContentLoaded", () => {
  const cartModal = document.getElementById("cartModal");
  const basketImg = document.getElementById("basket");
  const closeBtn = document.getElementById("closeBtn");
  const closeX = document.getElementById("closeX"); 

  basketImg.addEventListener("click", () => {
    cartModal.classList.add("show");
  });


  closeBtn.addEventListener("click", () => {
    cartModal.classList.remove("show");
  });


  closeX.addEventListener("click", () => {
    cartModal.classList.remove("show");
  });


  cartModal.addEventListener("click", (e) => {
    if(e.target === cartModal) {
      cartModal.classList.remove("show");
    }
  });
});


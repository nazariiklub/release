const toggle = document.getElementById('theme-toggle');

// Якщо за замовчуванням темна тема, ставимо атрибут і чек
document.body.setAttribute('theme', 'dark');
toggle.checked = true;

toggle.addEventListener('click', () => {
  document.body.setAttribute('theme', toggle.checked ? 'dark' : 'light');
});

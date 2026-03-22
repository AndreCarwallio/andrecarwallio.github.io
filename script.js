/* =========================
   MOBILE MENU TOGGLE
   ========================= */
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('show');
});

/* =========================
   CLOSE MOBILE MENU
   AFTER CLICKING A LINK
   ========================= */
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('show');
  });
});
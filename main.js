// Theme
const themeToggle = document.querySelector('[data-theme-toggle]');
const html = document.documentElement;
const saved = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', saved);
updateIcon(saved);

themeToggle?.addEventListener('click', () => {
  const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  updateIcon(next);
});

function updateIcon(theme) {
  const btn = document.querySelector('[data-theme-toggle]');
  if (!btn) return;
  btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
}

// Mobile nav
const openBtn = document.getElementById('openNav');
const closeBtn = document.getElementById('closeNav');
const mobileNav = document.getElementById('mobileNav');

openBtn?.addEventListener('click', () => {
  mobileNav.classList.add('open');
  openBtn.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
});
function closeMobileNav() {
  mobileNav.classList.remove('open');
  openBtn?.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}
closeBtn?.addEventListener('click', closeMobileNav);
mobileNav?.addEventListener('click', e => { if (e.target === mobileNav) closeMobileNav(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMobileNav(); });

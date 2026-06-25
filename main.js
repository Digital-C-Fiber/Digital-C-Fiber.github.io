// ── Partials ──────────────────────────────────────────────
async function loadPartials() {
  const page = location.pathname.split('/').pop().replace('.html', '') || 'index';

  const [headerHTML, footerHTML] = await Promise.all([
    fetch('header.html').then(r => r.text()),
    fetch('footer.html').then(r => r.text())
  ]);

  const headerEl = document.getElementById('site-header');
  const footerEl = document.getElementById('site-footer');
  if (headerEl) headerEl.innerHTML = headerHTML;
  if (footerEl) footerEl.innerHTML = footerHTML;

  // Inject favicon
  if (!document.querySelector('link[rel~="icon"]')) {
    const link = document.createElement('link');
    link.rel = 'icon';
    link.href = 'https://avatars.githubusercontent.com/u/119848926?v=4';
    link.type = 'image/png';
    document.head.appendChild(link);
  }

  // Mark active nav links
  document.querySelectorAll(`[data-page="${page}"]`).forEach(el => el.classList.add('active'));

  // Init everything that depends on injected DOM
  initTheme();
  initMobileNav();
  initFilters();
}

// ── Theme ─────────────────────────────────────────────────
function initTheme() {
  const html = document.documentElement;
  const saved = localStorage.getItem('theme') || 'light';
  html.setAttribute('data-theme', saved);
  updateThemeIcon(saved);

  document.querySelector('[data-theme-toggle]')?.addEventListener('click', () => {
    const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateThemeIcon(next);
  });
}

function updateThemeIcon(theme) {
  const btn = document.querySelector('[data-theme-toggle]');
  if (!btn) return;
  btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
}

// ── Mobile nav ────────────────────────────────────────────
function initMobileNav() {
  const openBtn  = document.getElementById('openNav');
  const closeBtn = document.getElementById('closeNav');
  const mobileNav = document.getElementById('mobileNav');

  openBtn?.addEventListener('click', () => {
    mobileNav.classList.add('open');
    openBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  });

  function closeMobileNav() {
    mobileNav?.classList.remove('open');
    openBtn?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  closeBtn?.addEventListener('click', closeMobileNav);
  mobileNav?.addEventListener('click', e => { if (e.target === mobileNav) closeMobileNav(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMobileNav(); });
}

// ── Repository filters ────────────────────────────────────
function initFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const repoCards  = document.querySelectorAll('.repo-card');
  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      repoCards.forEach(card => {
        card.style.display = filter === 'all' || card.dataset.category === filter ? '' : 'none';
      });
    });
  });
}

loadPartials();

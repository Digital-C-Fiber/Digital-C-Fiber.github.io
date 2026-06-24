(function () {
  // ---- THEME TOGGLE ----
  const root = document.documentElement;
  let theme = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  root.setAttribute('data-theme', theme);

  function applyTheme(t) {
    theme = t;
    root.setAttribute('data-theme', t);
    document.querySelectorAll('[data-theme-toggle]').forEach(btn => {
      btn.setAttribute('aria-label', 'Switch to ' + (t === 'dark' ? 'light' : 'dark') + ' mode');
      btn.innerHTML = t === 'dark'
        ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
        : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
    });
  }
  applyTheme(theme);

  document.addEventListener('click', e => {
    if (e.target.closest('[data-theme-toggle]')) {
      applyTheme(theme === 'dark' ? 'light' : 'dark');
    }
  });

  // ---- MOBILE NAV ----
  const mobileNav = document.getElementById('mobileNav');
  const openBtn = document.getElementById('openNav');
  const closeBtn = document.getElementById('closeNav');

  function openMobileNav() {
    if (!mobileNav) return;
    mobileNav.classList.add('open');
    document.body.style.overflow = 'hidden';
    if (openBtn) openBtn.setAttribute('aria-expanded', 'true');
  }
  function closeMobileNav() {
    if (!mobileNav) return;
    mobileNav.classList.remove('open');
    document.body.style.overflow = '';
    if (openBtn) openBtn.setAttribute('aria-expanded', 'false');
  }

  if (openBtn) openBtn.addEventListener('click', openMobileNav);
  if (closeBtn) closeBtn.addEventListener('click', closeMobileNav);
  mobileNav && mobileNav.addEventListener('click', e => { if (e.target === mobileNav) closeMobileNav(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMobileNav(); });

  // ---- ACTIVE NAV LINK ----
  const path = location.pathname.replace(/\/+$/, '') || '/';
  document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
    const href = link.getAttribute('href').replace(/\/+$/, '') || '/';
    if (path.endsWith(href.replace(/^\./, ''))) link.classList.add('active');
  });
})();

function toggleAbstract(btn) {
  const abs = btn.nextElementSibling;
  const open = btn.getAttribute('aria-expanded') === 'true';
  btn.setAttribute('aria-expanded', String(!open));
  abs.hidden = open;
}

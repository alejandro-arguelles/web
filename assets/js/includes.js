document.addEventListener('DOMContentLoaded', async () => {
  // Carga includes
  const includeTargets = document.querySelectorAll('[data-include]');
  await Promise.all([...includeTargets].map(async el => {
    const url = el.getAttribute('data-include');
    const res = await fetch(url);
    el.innerHTML = await res.text();
  }));

  // Marca activo el enlace del nav correspondiente a la página actual
  const current = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('.top-nav a').forEach(a => {
    const href = (a.getAttribute('href') || '').toLowerCase();
    if (href === current) {
      a.classList.add('active');
      a.setAttribute('aria-current','page');
    }
  });
});

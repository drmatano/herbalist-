// Main JS for site: small progressive enhancements
document.addEventListener('DOMContentLoaded', function () {
  // Year in footer
  var yearSpans = document.querySelectorAll('#year, #year-about, #year-services, #year-blog, #year-contact');
  yearSpans.forEach(function (el) {
    if (el) el.textContent = new Date().getFullYear();
  });

  // Mobile nav toggle
  var navToggle = document.getElementById('navToggle');
  var siteNav = document.getElementById('siteNav');
  if (navToggle && siteNav) {
    navToggle.addEventListener('click', function () {
      var expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      siteNav.classList.toggle('open');
    });
  }

  // Simple focus trap for nav when open (accessibility improvement)
  document.addEventListener('keydown', function (ev) {
    if (ev.key === 'Escape') {
      if (siteNav && siteNav.classList.contains('open')) {
        siteNav.classList.remove('open');
        if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
        navToggle && navToggle.focus();
      }
    }
  });
});

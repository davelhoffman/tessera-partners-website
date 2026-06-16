(function () {
  'use strict';

  var nav = document.getElementById('nav');
  var hamburger = document.querySelector('.hamburger');
  var mobileLinks = document.querySelectorAll('.mobile-nav-links a');
  var navLinks = document.querySelectorAll('.nav-links a');
  var sections = document.querySelectorAll('section[id]');

  // ── Nav scroll shadow ────────────────────────────────────────────────────
  function onScroll() {
    if (nav) {
      nav.classList.toggle('scrolled', window.scrollY > 8);
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  // ── Hamburger toggle ─────────────────────────────────────────────────────
  if (hamburger) {
    hamburger.addEventListener('click', function () {
      document.body.classList.toggle('nav-open');
      hamburger.setAttribute(
        'aria-expanded',
        document.body.classList.contains('nav-open') ? 'true' : 'false'
      );
    });
  }

  // Close mobile menu when a link is clicked
  mobileLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      document.body.classList.remove('nav-open');
    });
  });

  // ── Smooth scroll with sticky nav offset ─────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var href = anchor.getAttribute('href');
      if (href === '#') return;
      var target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      var navHeight = nav ? nav.offsetHeight : 0;
      var targetTop = target.getBoundingClientRect().top + window.scrollY - navHeight - 8;
      window.scrollTo({ top: targetTop, behavior: 'smooth' });
      document.body.classList.remove('nav-open');
    });
  });

  // ── Active nav link on scroll ─────────────────────────────────────────────
  if ('IntersectionObserver' in window && sections.length && navLinks.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            navLinks.forEach(function (link) {
              link.classList.remove('active');
            });
            var activeLink = document.querySelector(
              '.nav-links a[href="#' + entry.target.id + '"]'
            );
            if (activeLink) {
              activeLink.classList.add('active');
            }
          }
        });
      },
      { rootMargin: '-15% 0px -70% 0px', threshold: 0 }
    );

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }
})();

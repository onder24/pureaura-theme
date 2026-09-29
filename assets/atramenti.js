/* ══════════════════════════════════════════════════════════
   ATRAMENTI  ·  shared behaviour

   Scroll reveal only. IntersectionObserver, never a scroll
   listener. Elements reveal once and are then unobserved, so
   nothing runs on an idle page.

   Motivation for the motion (MOTION_INTENSITY 5): sections
   enter in reading order, which establishes hierarchy on a
   long page. Under prefers-reduced-motion nothing animates
   and everything is visible immediately.
   ══════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');

  function revealAll(root) {
    var nodes = (root || document).querySelectorAll('.atm-reveal:not(.is-in)');
    for (var i = 0; i < nodes.length; i++) nodes[i].classList.add('is-in');
  }

  function init(root) {
    var scope = root || document;

    if (reduce.matches || !('IntersectionObserver' in window)) {
      revealAll(scope);
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;

          var el = entry.target;
          var delay = parseInt(el.getAttribute('data-atm-delay'), 10) || 0;

          if (delay) el.style.transitionDelay = delay + 'ms';
          el.classList.add('is-in');
          observer.unobserve(el);
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );

    var nodes = scope.querySelectorAll('.atm-reveal');
    for (var i = 0; i < nodes.length; i++) observer.observe(nodes[i]);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      init();
    });
  } else {
    init();
  }

  /* If the user flips the OS setting mid-visit, stop hiding content. */
  if (reduce.addEventListener) {
    reduce.addEventListener('change', function (e) {
      if (e.matches) revealAll();
    });
  }

  /* Theme editor re-renders a section: re-scan just that subtree. */
  document.addEventListener('shopify:section:load', function (e) {
    init(e.target);
  });
})();

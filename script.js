// SCRIPT.JS - Controls skill bar animation (runs once on page load)
(function(){
  // animate bars on page load (only once)
  window.addEventListener('load', () => {
    const fills = document.querySelectorAll('.fill');
    if(!fills.length) return;

    // small stagger for visible polish
    fills.forEach((el, i) => {
      const pct = el.getAttribute('data-percent') || '100';
      setTimeout(() => {
        el.style.width = pct + '%';
      }, 200 + i * 80);
    });
  });
})();

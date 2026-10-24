(function () {
  var doc = document.documentElement;
  var body = document.body;
  var toggle = document.getElementById('menu-toggle');
  var drawer = document.getElementById('mob-drawer');
  var overlay = document.getElementById('mob-overlay');
  var closeBtn = document.getElementById('mob-close');
  var BREAKPOINT = 900;
  function setOpen(open) {
    body.classList.toggle('mob-open', open);
    doc.style.overflow = open ? 'hidden' : '';
    if (toggle) toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (drawer) drawer.setAttribute('aria-hidden', open ? 'false' : 'true');
    if (open && closeBtn) closeBtn.focus();
    if (!open && toggle) toggle.focus();
  }
  if (toggle && drawer) {
    toggle.addEventListener('click', function () { setOpen(true); });
    if (closeBtn) closeBtn.addEventListener('click', function () { setOpen(false); });
    if (overlay) overlay.addEventListener('click', function () { setOpen(false); });
    drawer.addEventListener('click', function (e) {
      if (e.target.closest && e.target.closest('a')) setOpen(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && body.classList.contains('mob-open')) setOpen(false);
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth > BREAKPOINT && body.classList.contains('mob-open')) setOpen(false);
    });
  }
  // close the desktop dropdowns with Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && document.activeElement && document.activeElement.blur) {
      var dd = document.activeElement.closest && document.activeElement.closest('.has-dd');
      if (dd) document.activeElement.blur();
    }
  });
})();

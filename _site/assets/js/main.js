/**
 * Main JS file for theme behaviours
 */

// Responsive video embeds
var videoEmbeds = [
  'iframe[src*="youtube.com"]',
  'iframe[src*="vimeo.com"]'
];
reframe(videoEmbeds.join(','));

// Mobile menu
var menuToggle = document.querySelectorAll('.menu-toggle');
if (menuToggle) {
  for (var i = 0; i < menuToggle.length; i++) {
    menuToggle[i].addEventListener('click', function (e) {
      document.body.classList.toggle('menu--opened');
      e.preventDefault();
    }, false);
  }

  document.body.classList.remove('menu--opened');

  window.addEventListener('resize', function () {
    if (menuToggle.offsetParent === null) {
      document.body.classList.remove('menu--opened');
    }
  }, true);
}

// Hero links/photos
if (document.getElementById("hero")) {
  var links = ["jane"];

  links.forEach(function(link) {
    var linkElement = document.getElementById("hero-" + link + "-link");
    var photoElement = document.getElementById("hero-" + link + "-photo");

    linkElement.addEventListener('mouseenter', function() {
      photoElement.classList.add("show")
    });

    linkElement.addEventListener('mouseleave', function() {
      photoElement.classList.remove("show")
    });
  })
}

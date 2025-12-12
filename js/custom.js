// sticky menu bar
$(document).ready(function () {
  var $window = $(window);

  $window.on('scroll', function () {
    if ($window.scrollTop() > 100) {
      $('.navbar').addClass('scroolMenu');
    } else {
      $('.navbar').removeClass('scroolMenu');
    }
  });
});

new VenoBox({
  selector: '.my-image-links',
  numeration: true,
  infinigall: true,
  share: true,
  spinner: 'rotating-plane',
});

new VenoBox({
  selector: '.my-video-links',
});

$('.teamSlider').owlCarousel({
  loop: true,
  items: 4,
  margin: 30,
  dots: true,
  dotsEach: true,
  smartSpeed: 500,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 2,
    },
    1000: {
      items: 4,
    },
  },
});

// counter js
$(document).ready(function () {
  $('.counter').counterUp();
});

// scrool fixed btn
document.addEventListener('DOMContentLoaded', () => {
  const btmBtn = document.querySelector('.btmBtn');

  // Show/Hide on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      btmBtn.classList.add('active');
    } else {
      btmBtn.classList.remove('active');
    }
  });

  // Smooth scroll to top
  btmBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
});

/**
* Template Name: Bocor
* Template URL: https://bootstrapmade.com/bocor-bootstrap-template-nice-animation/
* Updated: Aug 07 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  // abotu
  function smoothScroll(target, duration, offset = 0) {
    const start = window.pageYOffset; // Posisi awal
    const end = target.getBoundingClientRect().top + start - offset; // Posisi akhir dengan offset
    const distance = end - start; // Jarak untuk digulir
    let startTime = null;
  
    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, start, distance, duration);
      window.scrollTo(0, run); // Gulir ke posisi baru
      if (timeElapsed < duration) requestAnimationFrame(animation); // Lanjutkan animasi
    }
  
    // Fungsi easing untuk membuat guliran mulus
    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }
  
    requestAnimationFrame(animation);
  }
  
  // document.querySelector('.btn-get-started').addEventListener('click', function (e) {
  //   e.preventDefault(); // Mencegah aksi default tautan
  //   const target = document.querySelector('#about'); // Elemen tujuan
  //   smoothScroll(target, 1000, 100); // Guliran mulus dengan durasi 1000ms dan offset 100px
  // });

  //menu 
    document.querySelector('.active').addEventListener('click', function (e) {
      e.preventDefault(); // Mencegah aksi default tautan
      const target = document.querySelector('#hero'); // Elemen tujuan
      smoothScroll(target, 100, 100); // Guliran mulus dengan durasi 1000ms dan offset 100px
    });
    document.querySelector('.tentangkami').addEventListener('click', function (e) {
      e.preventDefault(); // Mencegah aksi default tautan
      const target = document.querySelector('#about'); // Elemen tujuan
      smoothScroll(target, 100, 100); // Guliran mulus dengan durasi 1000ms dan offset 100px
    });

    document.querySelector('.menukofi').addEventListener('click', function (e) {
      e.preventDefault(); // Mencegah aksi default tautan
      const target = document.querySelector('#team'); // Elemen tujuan
      smoothScroll(target, 100, 100); // Guliran mulus dengan durasi 1000ms dan offset 100px
    });

    document.querySelector('.contact').addEventListener('click', function (e) {
      e.preventDefault(); // Mencegah aksi default tautan
      const target = document.querySelector('#contact'); // Elemen tujuan
      smoothScroll(target, 100, 100); // Guliran mulus dengan durasi 1000ms dan offset 100px
    });
  
  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });
    

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  // by rifki
  // const heroImg = document.querySelector('.hero-img img');

  // heroImg.addEventListener('mousemove', (event) => {
  //   const { left, top, width, height } = heroImg.getBoundingClientRect();
  //   const x = ((event.clientX - left) / width - 0.5) * 30; // Intensitas rotasi
  //   const y = ((event.clientY - top) / height - 0.5) * -30;
  
  //   heroImg.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
  // });
  
  // heroImg.addEventListener('mouseleave', () => {
  //   heroImg.style.transform = 'rotateX(0) rotateY(0)';
  // });
  

})();
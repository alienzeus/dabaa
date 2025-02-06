(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Modal Video
    var $videoSrc;
    $('.btn-play').click(function () {
        $videoSrc = $(this).data("src");
    });
    console.log($videoSrc);
    $('#videoModal').on('shown.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    })
    $('#videoModal').on('hide.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc);
    })


    // Project and Testimonial carousel
    $(".project-carousel, .testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
			0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

// document.addEventListener("DOMContentLoaded", function () {
//     const contentDiv = document.getElementById("contact");
  
//     // Handle click events on navigation links
//     document.querySelectorAll("a.nav-link").forEach(link => {
//       link.addEventListener("click", function (contact) {
//         event.preventDefault(); // Prevent full page reload
  
//         const pageUrl = this.getAttribute("contact.html");
  
//         // Update the URL using pushState
//         window.history.pushState({ pageUrl }, "", pageUrl);
  
//         // Update content dynamically
//         loadPageContent(pageUrl);
//       });
//     });
  
//     // Simulate content loading based on the URL
//     function loadPageContent(url) {
//       const contentMap = {
//         "/about": "This is the About page content.",
//         "/services": "This is the Services page content.",
//         "/contact": "This is the Contact page content."
//       };
  
//       contentDiv.textContent = contentMap[url] || "Page not found.";
//     }
  
//     // Handle browser back/forward navigation
//     window.onpopstate = function (event) {
//       if (event.state && event.state.pageUrl) {
//         loadPageContent(event.state.pageUrl);
//       }
//     };
//   });
  
  

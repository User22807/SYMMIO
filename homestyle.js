
    // --------------Hambergur menu script
    const menuTrigger = document.querySelector('.menu-trigger');
    const overlay = document.querySelector('.overlay');

    // Get references to all menu links
    const menuLinks = document.querySelectorAll('.menu-links li a');

    // Add a click event listener to each menu link
    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        // Hide the overlay
        if (menuTrigger.checked = true) {
          menuTrigger.checked = false;
        }
      });
    });
    


    
    // ---------------Caption visibility scroll
    window.addEventListener("scroll", function () {
        var scrollPosition = window.scrollY || document.documentElement.scrollTop;
        var scrollThreshold1 = window.innerHeight * 0.2; // page number to lower oppacity
  
        if (scrollPosition <= scrollThreshold1) {
          // If scrolled 50% or more, hide the element with an ease-out effect
          document.querySelector(".caption").style.opacity = "1.0";
        } else {
          document.querySelector(".caption").style.opacity = "0.0";
        }
      });
      // ---------------CaptionMobile visibility scroll
      window.addEventListener("scroll", function () {
        var scrollPosition = window.scrollY || document.documentElement.scrollTop;
        var scrollThreshold1 = window.innerHeight * 0.2; // page number to lower oppacity
  
        if (scrollPosition <= scrollThreshold1) {
          // If scrolled 50% or more, hide the element with an ease-out effect
          document.querySelector(".captionMobile").style.opacity = "1.0";
        } else {
          document.querySelector(".captionMobile").style.opacity = "0.0";
        }
      });
  
  
      /*--------ScrollDown visibility-------*/
  
      window.addEventListener("scroll", function () {
        var scrollPosition = window.scrollY || document.documentElement.scrollTop;
        var scrollThreshold1 = window.innerHeight * 0.5; // page number to lower oppacity
        var scrollThreshold2 = window.innerHeight * 8.0; // page number to hide
  
        if (scrollPosition <= scrollThreshold1) {
          // If scrolled 50% or more, hide the element with an ease-out effect
          document.querySelector(".scrollDown").style.opacity = "1.0";
        } else if (scrollPosition <= scrollThreshold2) {
          // Otherwise, show the element with ease-in effect
          document.querySelector(".scrollDown").style.opacity = "0.2";
        } else {
          document.querySelector(".scrollDown").style.opacity = "0.0";
        }
      });
  
  
  
      ///////--------------------------- Big screen menu settings
      $(document).on("click", 'a[href^="#"]', function (event) {
        event.preventDefault();
  
        $("html, body").animate(
          {
            scrollTop: $($.attr(this, "href")).offset().top,
          },
          500
        );
      });
  
      $(document).ready(function () {
        function isElementInViewport(elem) {
          var rect = elem.getBoundingClientRect();
          return (
            rect.top >= 0 &&
            rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight)
          );
        }
  
        function activateMenuItem() {
          $(".section").each(function () {
            if (isElementInViewport(this)) {
              var sectionId = $(this).attr("id");
              $(".menu__item").removeClass("menu__item--current");
              $(".menu__link[href='#" + sectionId + "']")
                .parent()
                .addClass("menu__item--current");
            }
          });
        }
  
        function activateMenuItem() {
          var scrollPosition = $(window).scrollTop();
  
          $(".section").each(function () {
            var sectionId = $(this).attr("id");
            var sectionTop = $(this).offset().top;
            var sectionHeight = $(this).outerHeight();
  
            if (
              scrollPosition >= sectionTop &&
              scrollPosition < sectionTop + sectionHeight
            ) {
              $(".menu__item").removeClass("menu__item--current");
              $(".menu__link[href='#" + sectionId + "']")
                .parent()
                .addClass("menu__item--current");
            }
          });
        }
  
        activateMenuItem();
  
        $(window).on("scroll", function () {
          activateMenuItem();
        });
  
        $(document).on("click", ".menu__link", function (event) {
          event.preventDefault();
  
          var target = $($(this).attr("href"));
  
          if (target.length) {
            $("html, body").animate(
              {
                scrollTop: target.offset().top,
              },
              500
            );
          }
        });
      });
  
      $(document).on("click", 'button[href^="#"]', function (event) {
        event.preventDefault();
  
        $("html, body").animate(
          {
            scrollTop: $($.attr(this, "href")).offset().top,
          },
          500
        );
      });
  
      function setup() {
        $(".menu__item").first().addClass("menu__item--current");
      }
  
      $(document).on("click", ".menu__link", function (event) {
        event.preventDefault();
  
        var target = $($(this).attr("href"));
  
        if (target.length) {
          $("html, body").animate(
            {
              scrollTop: target.offset().top,
            },
            1000
          );
        }
      });
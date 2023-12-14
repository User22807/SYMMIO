function handleScrollDown(elementSelector, sectionId) {
  function scrollDownFunction() {
    window.scrollBy({
      top: window.innerHeight,
    });
  }

  function scrollToTopFunction() {
    window.scrollTo({
      top: 0,
    });
  }

  function setEventListeners(scrollButton, scrollFunction) {
    scrollButton.addEventListener("click", scrollFunction);
    scrollButton.addEventListener("touchstart", scrollFunction);
  }

  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY ;
    const element = document.querySelector(elementSelector);
    const lastSection = document.getElementById(sectionId);
    var scrollButton = document.getElementById("scrollDown");

    if (scrollPosition <= lastSection.offsetTop) {
      element.style.transform = `scaleY(1)`;
      setEventListeners(scrollButton, scrollDownFunction);
    } else {
      element.style.transform = `scaleY(-1)`;
      setEventListeners(scrollButton, scrollToTopFunction);
    }
  });

}

// button element selector, "last section" element ID
handleScrollDown(".scrollDown", "reachUs");







// Hamburger menu
const menuTrigger = document.querySelector(".menu-trigger");
const menuLinks = document.querySelectorAll(".menu-links li a");

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (menuTrigger.checked) {
      menuTrigger.checked = false;
    }
  });
});

// Caption and ScrollDown visibility on scroll
function handleScrollVisibility(
  elementSelector,
  scrollThreshold,
  opacityThreshold
) {
  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    const element = document.querySelector(elementSelector);

    if (scrollPosition >= scrollThreshold) {
      element.style.opacity = opacityThreshold;
    } else {
      element.style.opacity = 1 - opacityThreshold;
    }
  });
}

handleScrollVisibility(".captionMain", window.innerHeight * 0.2, 0.0);

// Smooth scroll to sections on click (both menu and buttons)
$(document).on("click", 'a[href^="#"], button[href^="#"]', function (event) {
  event.preventDefault();
  smoothScroll($(event.target).attr("href"));
});

function smoothScroll(target) {
  $("html, body").animate({ scrollTop: $(target).offset().top }, 500);
}

// Highlight current section in menu on scroll
function activateMenuItem() {
  const scrollPosition = $(window).scrollTop();

  $(".section").each(function () {
    const sectionId = $(this).attr("id");
    const sectionTop = $(this).offset().top;
    const sectionHeight = $(this).outerHeight();

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
$(window).on("scroll", activateMenuItem);

// Set first menu item as current by default
function setup() {
  $(".menu__item").first().addClass("menu__item--current");
}

$(document).ready(setup);

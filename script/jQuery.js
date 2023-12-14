// ScrollDown button functions
function handleScrollDown(elementSelector, scrollThreshold, rotationDegree) {
  function handleButtonClick() {
    // Scroll down by 100vh or scroll to top
    const scrollDestination = window.scrollY <= scrollThreshold ? window.scrollY + window.innerHeight : 0;

    window.scrollTo({
      top: scrollDestination,
      behavior: "smooth",
    });
  }

  function handleButtonClickTouch() {
    handleButtonClick();
    // Remove touchstart event after execution to prevent glitches
    scrollButton.removeEventListener("touchstart", handleButtonClickTouch);
  }

  function updateElementTransform(scrollPosition) {
    const element = document.querySelector(elementSelector);
    const scaleValue = scrollPosition <= scrollThreshold ? 1 : rotationDegree;
    element.style.transform = `scaleY(${scaleValue})`;
  }

  function handleScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    updateElementTransform(scrollPosition);
  }

  const scrollButton = document.getElementById("scrollDown");
  window.addEventListener("scroll", handleScroll);

  if (scrollButton) {
    scrollButton.addEventListener("click", handleButtonClick);
    scrollButton.addEventListener("touchstart", handleButtonClickTouch);

    // Add global click event listener to detect clicks outside the scroll button
    document.addEventListener("click", function (event) {
      const isOutsideButton = !event.target.closest(elementSelector);
      if (isOutsideButton) {
        // Remove touchstart event when clicked outside the button
        scrollButton.removeEventListener("touchstart", handleButtonClickTouch);
      }
    });
  }
}

handleScrollDown(".scrollDown", window.innerHeight * 9.2, -1);


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

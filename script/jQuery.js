document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll(".section");
  let currentSectionIndex = 0;

  function scrollToSection(index) {
    sections[index].scrollIntoView({ behavior: 'smooth' });
  }

  function handleScrollDownClick() {
    currentSectionIndex = (currentSectionIndex + 1) % sections.length;
    scrollToSection(currentSectionIndex);
  }

  function handleScroll() {
    const currentSection = getCurrentSection();

    if (currentSection !== null) {
      const index = Array.from(sections).findIndex(section => section.classList.contains(currentSection));
      if (index !== -1) {
        currentSectionIndex = index;
      }
    }
  }

  function handleWheel(event) {
    // Check the direction of the wheel scroll
    const deltaY = event.deltaY;
    if (deltaY > 0) {
      // Scrolling down
      currentSectionIndex = (currentSectionIndex + 1) % sections.length;
    } else if (deltaY < 0) {
      // Scrolling up
      currentSectionIndex = (currentSectionIndex - 1 + sections.length) % sections.length;
    }

    scrollToSection(currentSectionIndex);
  }

  function getCurrentSection() {
    let currentSection = null;

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();

      if (
        rect.top <= window.innerHeight / 2 &&
        rect.bottom >= window.innerHeight / 2
      ) {
        currentSection = section.classList.item(1); // Get the second class (index 1) as we don't need the "section" class
      }
    });

    return currentSection;
  }

  // Attach click event to the scrollDown button
  const scrollDownButton = document.querySelector(".scrollDown");
  scrollDownButton.addEventListener("click", handleScrollDownClick);

  // Attach scroll event to handle updating the current section
  window.addEventListener("scroll", handleScroll);

  // Attach wheel event to handle touch interactions
  window.addEventListener("wheel", handleWheel);
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

// Smooth SCROLL TO sections on click (both menu and buttons)
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

//***********     text gsap     ***********//

// Set up content scroll triggers
function setupContentScrollTrigger() {
  gsap.registerPlugin(ScrollTrigger);

  const content = [
    {
      list_top: "",
      title: "",
      subtitle:
        "Bilateral OTC Derivatives with Intent-Based execution.<br/>Leverage trade any asset permissionlessly with hyper-efficient liquidity.",
      titleSYMM: "SYMMIO",
      list_top: "",
      selector: ".section.one",
    },
    {
      titleSYMM: "",
      title: "",
      subtitle: "",
      list_top:
        "<span class= head-span>HOW TO TRADE DERIVATIVES<br>with INTENTs using SYMMIO.</span> " +
        "</br></br>" +
        " <span>• FORMULATE your INTENT via 3rd party frontend</span></br>" +
        " <span>• SEND your INTENT to the pool</span></br>" +
        " <span>• Counterparties (Hedgers) SEE your INTENT in the pool</span></br>" +
        " <span>• Counterparty (Hedger) CLAIMs your intent</span></br>" +
        " <span>• Claimed INTENTs CREATE a trade</span></br>" +
        " <span>• Both parties LOCK collateral</span>",

      selector: ".section.two",
    },
    {
      titleSYMM: "",
      title: "",
      subtitle: "",
      list_top:
        "<span class= head-span>HOW TO TRADE DERIVATIVES<br>with INTENTs using SYMMIO.</span> " +
        "</br></br>" +
        " <span class=active-span>• FORMULATE your INTENT via 3rd party frontend</span></br>" +
        " <span>• SEND your INTENT to the pool</span></br>" +
        " <span>• Counterparties (Hedgers) SEE your INTENT in the pool</span></br>" +
        " <span>• Counterparty (Hedger) CLAIMs your intent</span></br>" +
        " <span>• Claimed INTENTs CREATE a trade</span></br>" +
        " <span>• Both parties LOCK collateral</span>",

      selector: ".section.three",
    },
    {
      titleSYMM: "",
      title: "",
      subtitle: "",
      list_top:
        "<span class= head-span>HOW TO TRADE DERIVATIVES<br>with INTENTs using SYMMIO.</span> " +
        "</br></br>" +
        " <span>• FORMULATE your INTENT via 3rd party frontend</span></br>" +
        " <span class=active-span>• SEND your INTENT to the pool</span></br>" +
        " <span>• Counterparties (Hedgers) SEE your INTENT in the pool</span></br>" +
        " <span>• Counterparty (Hedger) CLAIMs your intent</span></br>" +
        " <span>• Claimed INTENTs CREATE a trade</span></br>" +
        " <span>• Both parties LOCK collateral</span>",

      selector: ".section.four",
    },
    {
      titleSYMM: "",
      title: "",
      subtitle: "",
      list_top:
        "<span class= head-span>HOW TO TRADE DERIVATIVES<br>with INTENTs using SYMMIO.</span> " +
        "</br></br>" +
        " <span>• FORMULATE your INTENT via 3rd party frontend</span></br>" +
        " <span>• SEND your INTENT to the pool</span></br>" +
        " <span class=active-span>• Counterparties (Hedgers) SEE your INTENT in the pool</span></br>" +
        " <span>• Counterparty (Hedger) CLAIMs your intent</span></br>" +
        " <span>• Claimed INTENTs CREATE a trade</span></br>" +
        " <span>• Both parties LOCK collateral</span>",

      selector: ".section.five",
    },
    {
      titleSYMM: "",
      title: "",
      subtitle: "",
      list_top:
        "<span class= head-span>HOW TO TRADE DERIVATIVES<br>with INTENTs using SYMMIO.</span> " +
        "</br></br>" +
        " <span>• FORMULATE your INTENT via 3rd party frontend</span></br>" +
        " <span>• SEND your INTENT to the pool</span></br>" +
        " <span>• Counterparties (Hedgers) SEE your INTENT in the pool</span></br>" +
        " <span class=active-span>• Counterparty (Hedger) CLAIMs your intent</span></br>" +
        " <span>• Claimed INTENTs CREATE a trade</span></br>" +
        " <span>• Both parties LOCK collateral</span>",

      selector: ".section.six",
    },
    {
      titleSYMM: "",
      title: "",
      subtitle: "",
      list_top:
        "<span class= head-span>HOW TO TRADE DERIVATIVES<br>with INTENTs using SYMMIO.</span> " +
        "</br></br>" +
        " <span>• FORMULATE your INTENT via 3rd party frontend</span></br>" +
        " <span>• SEND your INTENT to the pool</span></br>" +
        " <span>• Counterparties (Hedgers) SEE your INTENT in the pool</span></br>" +
        " <span>• Counterparty (Hedger) CLAIMs your intent</span></br>" +
        " <span class=active-span>• Claimed INTENTs CREATE a trade</span></br>" +
        " <span>• Both parties LOCK collateral</span>",

      selector: ".section.seven",
    },
    {
      titleSYMM: "",
      title: "",
      subtitle: "",
      list_top:
        "<span class= head-span>HOW TO TRADE DERIVATIVES<br>with INTENTs using SYMMIO.</span> " +
        "</br></br>" +
        " <span>• FORMULATE your INTENT via 3rd party frontend</span></br>" +
        " <span>• SEND your INTENT to the pool</span></br>" +
        " <span>• Counterparties (Hedgers) SEE your INTENT in the pool</span></br>" +
        " <span>• Counterparty (Hedger) CLAIMs your intent</span></br>" +
        " <span>• Claimed INTENTs CREATE a trade</span></br>" +
        " <span class=active-span>• Both parties LOCK collateral</span>",

      selector: ".section.eight",
    },
    {
      titleSYMM: "",
      list_top: "",
      title: "",
      subtitle: "",
      list_top:
        "<span class= head-span>Neutral Parties as Arbiters</span> " +
        "</br></br>" +
        " <span class=active-span>Arbiters are advanced liquidators ensuring all parties adhere to the rules and maintain solvency. </span></br>" +
        " <span class=active-span>Both sides can be liquidated and their actions disputed, creating a trustless and highly capital efficient system.</span></br>",
      selector: ".section.nine",
    },
    {
      titleSYMM: "",
      title: "",
      subtitle: "",
      list_top:
        "<span class= head-span>PartyA and PartyB are SYMMETRICAL</span> " +
        "</br></br>" +
        " <span class=active-span>One side LONGs 1 BTC.</span></br>" +
        " <span class=active-span>The other side SHORTs 1 BTC.</span></br>" +
        " <span class=active-span>The loss of one side is the win of the other.</span></br>",
      selector: ".section.ten",
    },
    {
      titleSYMM: "",
      title: "",
      subtitle: "",
      list_top: "",
      selector: ".section.eleven",
    },
  ];

  content.forEach((item, i, arr) => {
    const onUpdate = function () {
      const time = this.time();
      const duration = this.duration();

      if (time >= duration || time <= 0) {
        return;
      }
    };
    // Create a timeline for the intro animation
    const introTimeline = gsap.timeline();

    // Add fade-in animation for the titles, subtitles, and other elements
    introTimeline.from(
      `${item.selector} .box__text`,
      { opacity: 0, duration: 5 },
      0
    );

    const timeline = new gsap.timeline({
      scrollTrigger: {
        trigger: item.selector,
        scrub: true,
        start: "top 75%",
        end: `bottom ${i < arr.length - 1 ? "75%" : "bottom"}`,
      },
    })
      .to(
        `${item.selector} .title`,
        { text: `${item.title}`, ease: "linear", duration: 0.125, onUpdate },
        0
      )
      .to(
        `${item.selector} .titleSYMM`,
        { text: `${item.titleSYMM}`, ease: "linear", duration: 0.0, onUpdate },
        0
      )
      .to(
        `${item.selector} .subtitle`,
        { text: `${item.subtitle}`, ease: "linear", duration: 0.0, onUpdate },
        0
      )
      .to(
        `${item.selector} .list_top`,
        { text: `${item.list_top}`, ease: "linear", duration: 0, onUpdate },
        0
      );

    if (i < arr.length - 1) {
      timeline.yoyo(true).repeat(1).repeatDelay(0.5);
    }
  });
}

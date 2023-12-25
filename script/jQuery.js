$(document).ready(function () {
  $('#scrollDownID').on('click', function () {
    scrollDown();
});

function scrollDown() {
    let currentSection = $('section.active');
    let nextSection = currentSection.next('section');

    if (nextSection.length > 0) {
        $('body, html').animate({
            scrollTop: nextSection.offset().top
        }, 800);
        currentSection.removeClass('active');
        nextSection.addClass('active');
    } else {
        // If the last section is reached, scroll to the top without smooth scroll
        $('body, html').scrollTop(0);
        $('section').removeClass('active');
        $('section:first').addClass('active');
    }
}
  //***************close menu when clicked
  var menuTrigger = document.getElementById("menu_trigger");
  var menuLinks = document.querySelectorAll(".menu-links li a");

  // Add click event listener to each menu link
  menuLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      // Toggle the state of the menu trigger checkbox
      menuTrigger.checked = !menuTrigger.checked;
    });
  });

  // Initialize Scrollify with mandatory snap scrolling
  $.scrollify({
    section: "section",
    scrollSpeed: 1500,
    scrollbars: false,
    setHeights: false,
    snap: true,
    scrollSnapOffset: 0,
    easing: "easeInOutSine",
  });
  // Set up smooth scroll effect for anchor links
  $('a[href^="#"]').on("click", function (event) {
    event.preventDefault();
    let target = $(this.getAttribute("href"));
    if (target.length) {
      $("html, body").stop().animate(
        {
          scrollTop: target.offset().top,
        },
        1500
      );
    }
  });
});


// ******************** scroll functions ********************

$(window).scroll(function () {
  //scroll down icon invertion
  const scrollDownElement = document.querySelector(".scrollDown-wrapper");
  const sectionEleven = document.querySelector(".sectionWrap.eleven").offsetTop;
  if (window.scrollY == sectionEleven) {
    scrollDownElement.style.transform = `scaleY(-1)`;
  } else {
    scrollDownElement.style.transform = `scaleY(1)`;
  }

  //caption text visibility
  var elementSelector = ".captionMain";
  const captionElement = document.querySelector(elementSelector);
  var scrollThreshold = window.innerHeight * 0.2;
  var opacityThreshold = 0.0;
  const scrollPosition = window.scrollY || document.documentElement.scrollTop;
  if (scrollPosition >= scrollThreshold) {
    captionElement.style.opacity = opacityThreshold;
  } else {
    captionElement.style.opacity = 1 - opacityThreshold;
  }

  //scrollbar style
  var scroll = $(window).scrollTop();
  var dh = $(document).height();
  var wh = $(window).height();
  var scrollPercent = (scroll / (dh - wh)) * wh;
  $("#progressbar").css("height", scrollPercent + "px");

  // Highlight current section in menu on scroll
  $(".sectionWrap").each(function () {
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
});


// ******************** changing word ********************

const changingWords = [
  "CRYPTOS",
  "COMMODITIES",
  "AGREEMENTS",
  "FUTURES",
  "TRADING",
  "OPTIONS",
  "DERIVATIVES",
  "PERPETUALS",
  "BONDS",
  "STOCKS",
];

// Index to keep track of the current word
let currentIndex = 0;

// Function to update the changing word with an animation
function updateChangingWord() {
  const changingWordElement = document.getElementById("changingWord");
  const textContainerElement = document.getElementById("rollingTextContainer");

  textContainerElement.style.width = `${changingWordElement.offsetWidth}px`; // Set the width to the current word's width

  changingWordElement.classList.remove("fade-in");
  changingWordElement.classList.add("fade-out");

  setTimeout(() => {
    changingWordElement.textContent = changingWords[currentIndex];
    changingWordElement.classList.remove("fade-out");
    changingWordElement.classList.add("fade-in");

    // Update the container width after changing the word
    textContainerElement.style.width = `${changingWordElement.offsetWidth}px`;

    currentIndex = (currentIndex + 1) % changingWords.length;
  }, 500); // Adjust the duration as needed
}

// Initial call to start the animation
updateChangingWord();

// Set up a timer to change the word at intervals
setInterval(updateChangingWord, 3000); // Change the word every 3 seconds, adjust as needed

//***********     text gsap     ***********//

// Set up content scroll triggers
gsap.registerPlugin(ScrollTrigger);

const content = [
  {
    list_top: "",
    title: "",
    subtitle:
      "Bilateral OTC Derivatives with Intent-Based execution.<br/>Leverage trade any asset permissionlessly with hyper-efficient liquidity.",
    titleSYMM: "SYMMIO",
    list_top: "",
    selector: ".sectionWrap.one",
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

    selector: ".sectionWrap.two",
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

    selector: ".sectionWrap.three",
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

    selector: ".sectionWrap.four",
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

    selector: ".sectionWrap.five",
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

    selector: ".sectionWrap.six",
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

    selector: ".sectionWrap.seven",
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

    selector: ".sectionWrap.eight",
  },
  {
    titleSYMM: "",
    list_top: "",
    title: "",
    subtitle: "",
    list_top:
      "<span class= head-span>Neutral Parties as Arbiters</span> " +
      "</br></br>" +
      " <span class=active-span>Arbiters are advanced liquidators ensuring all parties adhere to the rules and maintain solvency. </span></br></br>" +
      " <span class=active-span>Both sides can be liquidated and their actions disputed, creating a trustless and highly capital efficient system.</span></br>",
    selector: ".sectionWrap.nine",
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
    selector: ".sectionWrap.ten",
  },
  {
    titleSYMM: "",
    title: "",
    subtitle: "",
    list_top: "",
    selector: ".sectionWrap.eleven",
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
      { text: `${item.title}`, ease: "linear", duration: 0.2, onUpdate },
      0
    )
    .to(
      `${item.selector} .titleSYMM`,
      { text: `${item.titleSYMM}`, ease: "linear", duration: 0.2, onUpdate },
      0
    )
    .to(
      `${item.selector} .subtitle`,
      { text: `${item.subtitle}`, ease: "linear", duration: 0.2, onUpdate },
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

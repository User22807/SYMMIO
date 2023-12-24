$(window).scroll(function(){
  var scroll = $(window).scrollTop();
  var dh = $(document).height();
  var wh = $(window).height();
  
  var scrollPercent = (scroll / (dh - wh)) * wh;
  $('#progressbar').css('height',scrollPercent + 'px')
  
});
// Array of words for the changing word
   const changingWords = ["CRYPTOS", "COMMODITIES", "AGREEMENTS", "FUTURES", "TRADING", "OPTIONS", "DERIVATIVES", "PERPETUALS", "BONDS", "STOCKS"];
    
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
 
   document.addEventListener("DOMContentLoaded", function () {
    var isTouchDevice = "ontouchstart" in document.documentElement;
    var scrollDownButtons = document.getElementsByClassName("single-scroll-down-animation");
  
    Array.from(scrollDownButtons).forEach(function (button) {
      button.addEventListener(
        isTouchDevice ? "touchstart" : "click",
        function (event) {
          event.preventDefault();
          var currentPosition = window.scrollY;
          var viewportHeight = window.innerHeight;
          var targetPosition = currentPosition + viewportHeight;
  
          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });
        }
      );
    });
  });
  
  function handleScrollDown(elementSelector) {
    const sectionNames = [
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
      "ten",
      "eleven",
    ];
  
    window.addEventListener("scroll", () => {
      const element = document.querySelector(elementSelector);
      const currentSectionIndex = sectionNames.findIndex((sectionName) => {
        const section = document.querySelector(`.sectionWrap.${sectionName}`);
        return window.scrollY === section.offsetTop;
      });
  
      // Scroll when clicked or touched and scroll to top
      if (currentSectionIndex !== -1) {
        element.style.transform = `scaleY(1)`;
  
        function scrollToNextSection() {
          const nextSectionIndex =
            (currentSectionIndex + 1) % sectionNames.length;
          const nextSection = document.querySelector(
            `.sectionWrap.${sectionNames[nextSectionIndex]}`
          );
  
          window.scrollTo({
            top: nextSection.offsetTop,
          });
        }
  
        element.addEventListener("click", scrollToNextSection);
        element.addEventListener("touchstart", scrollToNextSection);
      }
  
      // Flip the scroll button
      if (currentSectionIndex >= sectionNames.length - 1) {
        element.style.transform = `scaleY(-1)`;
      }
    });
  }
  
  handleScrollDown(".single-scroll-down-animation");
  
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
}

activateMenuItem();
$(window).on("scroll", activateMenuItem);

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
//***************scroll down button click listener
$("#scrollDownID").on("click", function () {
  // Get the current scroll position
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  // Get the total height of the document
  const totalHeight =
    document.documentElement.scrollHeight - window.innerHeight;

  // Calculate scroll progress as a percentage
  const scrollProgress = (scrollTop / totalHeight) * 100;

  const sectionOne = document.querySelector(".sectionWrap.one").offsetTop;
  const sectionTwo = document.querySelector(".sectionWrap.two").offsetTop;
  const sectionThree = document.querySelector(".sectionWrap.three").offsetTop;
  const sectionFour = document.querySelector(".sectionWrap.four").offsetTop;
  const sectionFive = document.querySelector(".sectionWrap.five").offsetTop;
  const sectionSix = document.querySelector(".sectionWrap.six").offsetTop;
  const sectionSeven = document.querySelector(".sectionWrap.seven").offsetTop;
  const sectionEight = document.querySelector(".sectionWrap.eight").offsetTop;
  const sectionNine = document.querySelector(".sectionWrap.nine").offsetTop;
  const sectionTen = document.querySelector(".sectionWrap.ten").offsetTop;
  const sectionEleven = document.querySelector(".sectionWrap.eleven").offsetTop;

  if (scrollProgress < 5.0) {
    window.scrollTo({
      top: sectionTwo,
    });
  } else if (scrollProgress < 15.0) {
    window.scrollTo({
      top: sectionThree,
    });
  } else if (scrollProgress < 25.0) {
    window.scrollTo({
      top: sectionFour,
    });
  } else if (scrollProgress < 35.0) {
    window.scrollTo({
      top: sectionFive,
    });
  } else if (scrollProgress < 45.0) {
    window.scrollTo({
      top: sectionSix,
    });
  } else if (scrollProgress < 55.0) {
    window.scrollTo({
      top: sectionSeven,
    });
  } else if (scrollProgress < 65.0) {
    window.scrollTo({
      top: sectionEight,
    });
  } else if (scrollProgress < 75.0) {
    window.scrollTo({
      top: sectionNine,
    });
  } else if (scrollProgress < 85.0) {
    window.scrollTo({
      top: sectionTen,
    });
  } else if (scrollProgress < 95.0) {
    window.scrollTo({
      top: sectionEleven,
    });
  } else if (scrollProgress < 105.0) {
    window.scrollTo({
      top: sectionOne,
    });
  }
});

// ******************** scroll functions ********************

$(window).scroll(function () {
  // Get the current scroll position
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  // Get the total height of the document
  const totalHeight =
    document.documentElement.scrollHeight - window.innerHeight;

  // Calculate scroll progress as a percentage
  const scrollProgress = (scrollTop / totalHeight) * 100;

  // Print the scroll progress to the console
  console.log(scrollProgress);

  //scroll down icon invertion
  const scrollDownElement = document.querySelector(".scrollDown-wrapper");
  const sectionEleven = document.querySelector(".sectionWrap.eleven").offsetTop;
  if (window.scrollY == sectionEleven) {
    scrollDownElement.style.transform = `scaleY(-1)`;
  } else {
    scrollDownElement.style.transform = `scaleY(1)`;
  }

  //caption visibility
  var elementSelector = ".captionMain";
  var scrollThreshold = window.innerHeight * 0.2;
  var opacityThreshold = 0.0;
  const scrollPosition = window.scrollY || document.documentElement.scrollTop;
  const element = document.querySelector(elementSelector);
  if (scrollPosition >= scrollThreshold) {
    element.style.opacity = opacityThreshold;
  } else {
    element.style.opacity = 1 - opacityThreshold;
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

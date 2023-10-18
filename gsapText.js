
function updateScrollProgress() {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const currentScroll = window.scrollY;
    scrollProgress = currentScroll / maxScroll;

    if (uniforms && uniforms.iScrollProgress) {
      uniforms.iScrollProgress.value = scrollProgress;
    }
  }



  // Set up content scroll triggers
  function setupContentScrollTrigger() {
    const content = [
      {
        list_top: "",
        title: "",
        subtitle: "Reimagining bilateral OTC Derivatives by combining them with Intent-Based execution. Allowing permissionless leverage trading of any asset, with hyperefficient just-in-time liquidity.",
        titleSYMM: "SYMMIO",
        list_top: "",
        selector: ".section.one"
      },
      {
        titleSYMM: "",
        title: "",
        subtitle: "",
        list_top: "<span class= head-span>HOW TO TRADE DERIVATIVES<br>with INTENTs using SYMMIO.</span> "
          + "</br></br>"
          + " <span>• FORMULATE your INTENT via 3rd party frontend</span></br>"
          + " <span>• SEND your INTENT to the onchain pool</span></br>"
          + " <span>• Counterparties (Hedgers) SEE your INTENT in the pool</span></br>"
          + " <span>• Counterparty (Hedger) CLAIMs your intent</span></br>"
          + " <span>• claimed INTENTs CREATE a trade</span></br>"
          + " <span>• Both parties LOCK collateral</span>",

        selector: ".section.two"
      },
      {
        titleSYMM: "",
        title: "",
        subtitle: "",
        list_top: "<span class= head-span>HOW TO TRADE DERIVATIVES<br>with INTENTs using SYMMIO.</span> "
          + "</br></br>"
          + " <span class=active-span>• FORMULATE your INTENT via 3rd party frontend</span></br>"
          + " <span>• SEND your INTENT to the onchain pool</span></br>"
          + " <span>• Counterparties (Hedgers) SEE your INTENT in the pool</span></br>"
          + " <span>• Counterparty (Hedger) CLAIMs your intent</span></br>"
          + " <span>• claimed INTENTs CREATE a trade</span></br>"
          + " <span>• Both parties LOCK collateral</span>",

        selector: ".section.three"
      },
      {
        titleSYMM: "",
        title: "",
        subtitle: "",
        list_top: "<span class= head-span>HOW TO TRADE DERIVATIVES<br>with INTENTs using SYMMIO.</span> "
          + "</br></br>"
          + " <span>• FORMULATE your INTENT via 3rd party frontend</span></br>"
          + " <span class=active-span>• SEND your INTENT to the onchain pool</span></br>"
          + " <span>• Counterparties (Hedgers) SEE your INTENT in the pool</span></br>"
          + " <span>• Counterparty (Hedger) CLAIMs your intent</span></br>"
          + " <span>• claimed INTENTs CREATE a trade</span></br>"
          + " <span>• Both parties LOCK collateral</span>",

        selector: ".section.four"
      },
      {
        titleSYMM: "",
        title: "",
        subtitle: "",
        list_top: "<span class= head-span>HOW TO TRADE DERIVATIVES<br>with INTENTs using SYMMIO.</span> "
          + "</br></br>"
          + " <span>• FORMULATE your INTENT via 3rd party frontend</span></br>"
          + " <span>• SEND your INTENT to the onchain pool</span></br>"
          + " <span class=active-span>• Counterparties (Hedgers) SEE your INTENT in the pool</span></br>"
          + " <span>• Counterparty (Hedger) CLAIMs your intent</span></br>"
          + " <span>• claimed INTENTs CREATE a trade</span></br>"
          + " <span>• Both parties LOCK collateral</span>",

        selector: ".section.five"
      },
      {
        titleSYMM: "",
        title: "",
        subtitle: "",
        list_top: "<span class= head-span>HOW TO TRADE DERIVATIVES<br>with INTENTs using SYMMIO.</span> "
          + "</br></br>"
          + " <span>• FORMULATE your INTENT via 3rd party frontend</span></br>"
          + " <span>• SEND your INTENT to the onchain pool</span></br>"
          + " <span>• Counterparties (Hedgers) SEE your INTENT in the pool</span></br>"
          + " <span class=active-span>• Counterparty (Hedger) CLAIMs your intent</span></br>"
          + " <span>• claimed INTENTs CREATE a trade</span></br>"
          + " <span>• Both parties LOCK collateral</span>",

        selector: ".section.six"
      },
      {
        titleSYMM: "",
        title: "",
        subtitle: "",
        list_top: "<span class= head-span>HOW TO TRADE DERIVATIVES<br>with INTENTs using SYMMIO.</span> "
          + "</br></br>"
          + " <span>• FORMULATE your INTENT via 3rd party frontend</span></br>"
          + " <span>• SEND your INTENT to the onchain pool</span></br>"
          + " <span>• Counterparties (Hedgers) SEE your INTENT in the pool</span></br>"
          + " <span>• Counterparty (Hedger) CLAIMs your intent</span></br>"
          + " <span class=active-span>• claimed INTENTs CREATE a trade</span></br>"
          + " <span>• Both parties LOCK collateral</span>",

        selector: ".section.seven"
      },
      {
        titleSYMM: "",
        title: "",
        subtitle: "",
        list_top: "<span class= head-span>HOW TO TRADE DERIVATIVES<br>with INTENTs using SYMMIO.</span> "
          + "</br></br>"
          + " <span>• FORMULATE your INTENT via 3rd party frontend</span></br>"
          + " <span>• SEND your INTENT to the onchain pool</span></br>"
          + " <span>• Counterparties (Hedgers) SEE your INTENT in the pool</span></br>"
          + " <span>• Counterparty (Hedger) CLAIMs your intent</span></br>"
          + " <span>• claimed INTENTs CREATE a trade</span></br>"
          + " <span class=active-span>• Both parties LOCK collateral</span>",

        selector: ".section.eight"
      },
      {
        titleSYMM: "",
        list_top: "",
        title: /*"Neutral Parties as WATCHDOGS"*/"",
        subtitle:/*"Liquidators make sure that all PartyA and PartyB pairs are playing by the rules, and are constantly ensuring their solvency. Otherwise they will get liquidated, which makes the system trustless as well as capital efficient."*/"",
        list_top: "<span class= head-span>Neutral Parties as WATCHDOGS</span> "
          + "</br></br>"

          + " <span class=active-span>Liquidators make sure that all PartyA and PartyB pairs are playing by the rules, and are constantly ensuring their solvency. Otherwise they will get liquidated, which makes the system trustless as well as capital efficient.</span></br>",
        selector: ".section.nine"
      },
      {
        titleSYMM: "",
        title: "",
        subtitle: "",
        list_top: "<span class= head-span>PartyA and PartyB are SYMMETRICAL</span> "
          + "</br></br>"

          + " <span class=active-span>exact mirrors of the same position.</span></br>"
          + " <span class=active-span>one Side LONGs 1 BTC,</span></br>"
          + " <span class=active-span>other side SHORTs 1 BTC,</span></br>"
          + " <span class=active-span>no PartyA & B pair = no trade.</span></br>"
          + " <span class=active-span>Loss of A = Win of B,</span></br>"
          + " <span class=active-span>SYMMETRICAL TRADING.</span>",
        selector: ".section.ten"
      },
      {
        titleSYMM: "",
        title: "",
        subtitle: "",
        list_top: "<span class= head-span>INTENT to know more?</span> ",
        selector: ".section.eleven"
      }
      // ... (add more content sections as needed)
    ];

    content.forEach((item, i, arr) => {
      const onUpdate = function () {
        const time = this.time();
        const duration = this.duration();

        if (time >= duration || time <= 0) {
          return;
        }
      };

      const timeline = new gsap.timeline({
        scrollTrigger: {
          trigger: item.selector,
          scrub: true,
          start: "top 75%",
          end: `bottom ${i < arr.length - 1 ? "75%" : "bottom"}`
        }
      })
        .to(
          `${item.selector} .title`,
          { text: `${item.title}`, ease: "linear", duration: 0.125, onUpdate },
          0
        )
        .to(
          `${item.selector} .titleSYMM`,
          { text: `${item.titleSYMM}`, ease: "linear", duration: 0.125, onUpdate },
          0
        )
        .to(
          `${item.selector} .subtitle`,
          {
            text: `${item.subtitle}`,
            ease: "linear",
            duration: 0.0625,
            onUpdate
          },
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
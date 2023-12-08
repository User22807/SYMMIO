let camera, scene, renderer, uniforms, scrollProgress;
init();
animate();
setupContentScrollTrigger();

function init() {
  const container = document.getElementById("container");

  camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

  scene = new THREE.Scene();

  const geometry = new THREE.PlaneGeometry(2, 2);

  uniforms = {
    iTime: { value: 1.0 },
    iResolution: { type: "v2", value: new THREE.Vector2() },
    iMousePos: { type: "v2", value: new THREE.Vector2() },
    iAnimProgress_1: { type: "v3", value: new THREE.Vector3() },
    iAnimProgress_2: { type: "v3", value: new THREE.Vector3() },
    iAnimProgress_3: { type: "v3", value: new THREE.Vector3() },
    iAnimProgress_4: { type: "v3", value: new THREE.Vector3() },
  };

  const material = new THREE.ShaderMaterial({
    uniforms: uniforms,
    vertexShader: document.getElementById("vertexShader").textContent,
    fragmentShader: document.getElementById("fragmentShader").textContent,
  });

  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);
  window.addEventListener("mousemove", handleMouseMove);
  window.addEventListener("resize", onWindowResize);
}

function onWindowResize() {
  uniforms.iResolution.value.x = window.innerWidth * window.devicePixelRatio;
  uniforms.iResolution.value.y = window.innerHeight * window.devicePixelRatio;

  renderer.setSize(window.innerWidth, window.innerHeight);
}

// Update mouse position uniform
function handleMouseMove(event) {
  uniforms.iMousePos.value.x = event.clientX;
  uniforms.iMousePos.value.y = window.innerHeight - event.clientY;
}

//

function animate() {
  requestAnimationFrame(animate);

  // Update time
  uniforms["iTime"].value = performance.now() / 1000;

  // Update resolution if needed
  uniforms.iResolution.value.x = window.innerWidth * window.devicePixelRatio;
  uniforms.iResolution.value.y = window.innerHeight * window.devicePixelRatio;

  renderer.setSize(window.innerWidth, window.innerHeight);

  renderer.render(scene, camera);
}

// Create a timeline for the intro animation
const introTimeline = gsap.timeline();

// Add an initial state for iAnimProgress_4.z
introTimeline.from(uniforms.iAnimProgress_4.value, {
  z: 2, // Set the initial value
  duration: 3.0, // Adjust the duration as needed
});

gsap.to(uniforms.iAnimProgress_1.value, {
  x: 1,
  scrollTrigger: {
    trigger: ".section.one",
    start: "0%",
    end: "100%",
    scrub: true,
  },
});
gsap.to(uniforms.iAnimProgress_1.value, {
  y: 1,
  scrollTrigger: {
    trigger: ".section.two",
    start: "0%",
    end: "100%",
    scrub: true,
  },
});
gsap.to(uniforms.iAnimProgress_1.value, {
  z: 1,
  scrollTrigger: {
    trigger: ".section.three",
    start: "0%",
    end: "100%",
    scrub: true,
  },
});
gsap.to(uniforms.iAnimProgress_2.value, {
  x: 1,
  scrollTrigger: {
    trigger: ".section.four",
    start: "0%",
    end: "100%",
    scrub: true,
  },
});
gsap.to(uniforms.iAnimProgress_2.value, {
  y: 1,
  scrollTrigger: {
    trigger: ".section.five",
    start: "0%",
    end: "100%",
    scrub: true,
  },
});
gsap.to(uniforms.iAnimProgress_2.value, {
  z: 1,
  scrollTrigger: {
    trigger: ".section.six",
    start: "0%",
    end: "100%",
    scrub: true,
  },
});

gsap.to(uniforms.iAnimProgress_3.value, {
  x: 1,
  scrollTrigger: {
    trigger: ".section.seven",
    start: "0%",
    end: "100%",
    scrub: true,
  },
});
gsap.to(uniforms.iAnimProgress_3.value, {
  y: 1,
  scrollTrigger: {
    trigger: ".section.eight",
    start: "0%",
    end: "100%",
    scrub: true,
  },
});
gsap.to(uniforms.iAnimProgress_3.value, {
  z: 1,
  scrollTrigger: {
    trigger: ".section.nine",
    start: "0%",
    end: "100%",
    scrub: true,
  },
});
gsap.to(uniforms.iAnimProgress_4.value, {
  x: 1,
  scrollTrigger: {
    trigger: ".section.ten",
    start: "0%",
    end: "100%",
    scrub: true,
  },
});
gsap.to(uniforms.iAnimProgress_4.value, {
  y: 1,
  scrollTrigger: {
    trigger: ".section.eleven",
    start: "0%",
    end: "100%",
    scrub: true,
  },
});

//------------------------------------------------------------------------text gsap
function updateScrollProgress() {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const currentScroll = window.scrollY;
  scrollProgress = currentScroll / maxScroll;
}

// Set up content scroll triggers
function setupContentScrollTrigger() {
  gsap.registerPlugin(ScrollTrigger);
  
  //snap scroll
  let sections = gsap.utils.toArray(".section");
  let isScrolling = ScrollTrigger.normalizeScroll(true),
  scrollTween;
  document.addEventListener("touchstart", e => {
    if (scrollTween) {
      e.preventDefault();
      e.stopImmediatePropagation();
    }
  }, {capture: true, passive: false})
    sections.forEach((eachPanel, i) => {
      ScrollTrigger.create({
        trigger: eachPanel,
        start: "top bottom", // Adjusted the start value
        end: "+=199%", // Adjusted the end value
        onToggle: (self) => self.isActive && !isScrolling && goToSection(i),
      });
    });

  const content = [
    {
      list_top: "",
      title: "",
      subtitle:
        "Reimagining bilateral OTC Derivatives by combining them with Intent-Based execution.<br/>Allowing permissionless leverage trading of any asset, with hyperefficient just-in-time liquidity.",
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
        "<span class= head-span>Neutral parties as Arbiters</span> " +
        "</br></br>" +
        " <span class=active-span>Arbiters are advanced liquidators ensuring all parties adhere to the rules and maintain solvency. As both sides can be liquidated and dispute decisions, the system is trustless and highly capital efficient.</span></br>",
      selector: ".section.nine",
    },
    {
      titleSYMM: "",
      title: "",
      subtitle: "",
      list_top:
        "<span class= head-span>PartyA and PartyB are SYMMETRICAL</span> " +
        "</br></br>" +
        " <span class=active-span>Exact mirrors of the same position.</span></br>" +
        " <span class=active-span>One Side LONGs 1 BTC,</span></br>" +
        " <span class=active-span>Other side SHORTs 1 BTC,</span></br>" +
        " <span class=active-span>No PartyA & B pair = no trade.</span></br>" +
        " <span class=active-span>Loss of A = Win of B,</span></br>" +
        " <span class=active-span>SYMMETRICAL TRADING.</span>",
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

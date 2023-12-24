//////////////////////////////THREE.JS(core)
let camera, scene, renderer, uniforms, scrollProgress;

init();
animate();

function init() {
  const container = document.getElementById("webGLID");

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
    trigger: ".sectionWrap.one",
    start: "0%",
    end: "100%",
    scrub: true,
  },
});
gsap.to(uniforms.iAnimProgress_1.value, {
  y: 1,
  scrollTrigger: {
    trigger: ".sectionWrap.two",
    start: "0%",
    end: "100%",
    scrub: true,
  },
});
gsap.to(uniforms.iAnimProgress_1.value, {
  z: 1,
  scrollTrigger: {
    trigger: ".sectionWrap.three",
    start: "0%",
    end: "100%",
    scrub: true,
  },
});
gsap.to(uniforms.iAnimProgress_2.value, {
  x: 1,
  scrollTrigger: {
    trigger: ".sectionWrap.four",
    start: "0%",
    end: "100%",
    scrub: true,
  },
});
gsap.to(uniforms.iAnimProgress_2.value, {
  y: 1,
  scrollTrigger: {
    trigger: ".sectionWrap.five",
    start: "0%",
    end: "100%",
    scrub: true,
  },
});
gsap.to(uniforms.iAnimProgress_2.value, {
  z: 1,
  scrollTrigger: {
    trigger: ".sectionWrap.six",
    start: "0%",
    end: "100%",
    scrub: true,
  },
});

gsap.to(uniforms.iAnimProgress_3.value, {
  x: 1,
  scrollTrigger: {
    trigger: ".sectionWrap.seven",
    start: "0%",
    end: "100%",
    scrub: true,
  },
});
gsap.to(uniforms.iAnimProgress_3.value, {
  y: 1,
  scrollTrigger: {
    trigger: ".sectionWrap.eight",
    start: "0%",
    end: "100%",
    scrub: true,
  },
});
gsap.to(uniforms.iAnimProgress_3.value, {
  z: 1,
  scrollTrigger: {
    trigger: ".sectionWrap.nine",
    start: "0%",
    end: "100%",
    scrub: true,
  },
});
gsap.to(uniforms.iAnimProgress_4.value, {
  x: 1,
  scrollTrigger: {
    trigger: ".sectionWrap.ten",
    start: "0%",
    end: "100%",
    scrub: true,
  },
});
gsap.to(uniforms.iAnimProgress_4.value, {
  y: 1,
  scrollTrigger: {
    trigger: ".sectionWrap.eleven",
    start: "0%",
    end: "100%",
    scrub: true,
  },
});

// Define global variables
let container, camera, scene, renderer, uniforms, startTime, scrollProgress;
// Initialize the scene
init();
animate();
setupContentScrollTrigger();

// Initialize the Three.js scene
function init() {
  container = document.getElementById("webgl-container");

  // Setup gsap plugins

  startTime = Date.now();
  camera = new THREE.Camera();
  scene = new THREE.Scene();
  var geometry = new THREE.PlaneBufferGeometry(16, 9);


  // Define uniforms
  uniforms = {
    iTime: { type: "f", value: 1.0 },
    iResolution: { type: "v2", value: new THREE.Vector2() },
    iMousePos: { type: "v2", value: new THREE.Vector2() },
    iAnimProgress_1: { type: "v3", value: new THREE.Vector3() },
    iAnimProgress_2: { type: "v3", value: new THREE.Vector3() },
    iAnimProgress_3: { type: "v3", value: new THREE.Vector3() },
    iAnimProgress_4: { type: "v3", value: new THREE.Vector3() },
  };

  var material = new THREE.ShaderMaterial( {

    uniforms: uniforms,
    vertexShader: document.getElementById('vertexShader').textContent,
    fragmentShader: document.getElementById('fragmentShader').textContent

  } );

  // Create and add mesh to the scene
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);
  // Create the renderer
  renderer = new THREE.WebGLRenderer;
  container.appendChild(renderer.domElement);

  renderer.setPixelRatio(window.devicePixelRatio);
  // Set up content scroll triggers

  // Handle window resizing
  handleResize();
  window.addEventListener("resize", handleResize);

  // Update scroll progress on mouse move and scrolling
  window.addEventListener("mousemove", handleMouseMove);
}

// Animate the scene
function animate() {
  render();
  requestAnimationFrame(animate);
}

// Render the scene
function render() {
  const currentTime = Date.now();
  uniforms.iTime.value = (currentTime - startTime) * 0.001;
  renderer.render(scene, camera);
}

// Handle window resize
function handleResize() {
  uniforms.iResolution.value.x = window.innerWidth * window.devicePixelRatio;
  uniforms.iResolution.value.y = window.innerHeight * window.devicePixelRatio;
  renderer.setSize(window.innerWidth, window.innerHeight);
}

// Update mouse position uniform
function handleMouseMove(event) {
  uniforms.iMousePos.value.x = event.clientX * window.devicePixelRatio;
  uniforms.iMousePos.value.y =
    (window.innerHeight - event.clientY) * window.devicePixelRatio;
}

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

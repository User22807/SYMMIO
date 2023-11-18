let camera, scene, renderer, uniforms, scrollProgress;


init();
animate();
setupContentScrollTrigger();

function init() {

  const container = document.getElementById('container');

  camera = new THREE.OrthographicCamera(- 1, 1, 1, - 1, 0, 1);

  scene = new THREE.Scene();

  const geometry = new THREE.PlaneGeometry(2, 2);

  uniforms = {
    iTime: { value: 1.0 },
    iResolution: { type: "v2", value: new THREE.Vector2() },
    iMousePos: { type: "v2", value: new THREE.Vector2() },
    iAnimProgress_1: { type: "v3", value: new THREE.Vector3() },
    iAnimProgress_2: { type: "v3", value: new THREE.Vector3() },
    iAnimProgress_3: { type: "v3", value: new THREE.Vector3() },
    iAnimProgress_4: { type: "v3", value: new THREE.Vector3() }
  };

  const material = new THREE.ShaderMaterial({

    uniforms: uniforms,
    vertexShader: document.getElementById('vertexShader').textContent,
    fragmentShader: document.getElementById('fragmentShader').textContent

  });

  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);
  window.addEventListener("mousemove", handleMouseMove);
  window.addEventListener('resize', onWindowResize);

}

function onWindowResize() {


  uniforms.iResolution.value.x = window.innerWidth * window.devicePixelRatio;
  uniforms.iResolution.value.y = window.innerHeight * window.devicePixelRatio;

  renderer.setSize(window.innerWidth, window.innerHeight);
}
// Update mouse position uniform
function handleMouseMove(event) {
    uniforms.iMousePos.value.x = event.clientX;
    uniforms.iMousePos.value.y =
      (window.innerHeight - event.clientY) ;
  }
  
//

function animate() {
  requestAnimationFrame(animate);

  // Update time
  uniforms['iTime'].value = performance.now() / 1000;

  // Update resolution if needed
  uniforms.iResolution.value.x = window.innerWidth * window.devicePixelRatio;
  uniforms.iResolution.value.y = window.innerHeight * window.devicePixelRatio;

  renderer.setSize(window.innerWidth, window.innerHeight);

  renderer.render(scene, camera);
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
  
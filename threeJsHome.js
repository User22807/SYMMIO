
// Define global variables
let container;
let camera, scene, renderer;
let uniforms;
let startTime;
let scrollProgress;

// Initialize the scene
init();
animate();

// Initialize the Three.js scene
function init() {
    // Setup gsap plugins
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(TextPlugin);

    container = document.getElementById("webgl-container");
    startTime = Date.now();

    camera = new THREE.OrthographicCamera(
        0,
        window.innerWidth,
        0,
        window.innerHeight,
        1,
        1000
    );
    
    scene = new THREE.Scene();

    const geometry = new THREE.PlaneBufferGeometry(
        window.innerWidth,
        window.innerHeight
    );

    // Define uniforms
    uniforms = {
        iTime: { type: "f", value: 1.0 },
        iResolution: { type: "v2", value: new THREE.Vector2() },
        iMousePos: { type: "v2", value: new THREE.Vector2() },
        iScrollProgress: { type: "f", value: 0.0 },
        iAnimProgress_1: { type: "v3", value: new THREE.Vector3() },
        iAnimProgress_2: { type: "v3", value: new THREE.Vector3() },
        iAnimProgress_3: { type: "v3", value: new THREE.Vector3() },
        iAnimProgress_4: { type: "v3", value: new THREE.Vector3() },
        iAnimProgress_5: { type: "v3", value: new THREE.Vector3() },
        iAnimProgress_6: { type: "v3", value: new THREE.Vector3() }

    };

    // Create the shader material
    const material = new THREE.ShaderMaterial({
        uniforms: uniforms,
        vertexShader: `
		void main() {
		  gl_Position = vec4(position, 1.0);
		}
	  `,
        fragmentShader: document.getElementById("fragmentShader").textContent
    });

    // Create and add mesh to the scene
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Create the renderer
    renderer = new THREE.WebGLRenderer({
        precision: "highp" // Set precision for smooth gradients and better precision
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    // Set up content scroll triggers
    setupContentScrollTrigger();

    // Handle window resizing
    handleResize();
    window.addEventListener("resize", handleResize);

    // Update scroll progress on mouse move and scrolling
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", updateScrollProgress);
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

// Update mouse position
function handleMouseMove(event) {
    uniforms.iMousePos.value.x = event.clientX * window.devicePixelRatio;
    uniforms.iMousePos.value.y =
        (window.innerHeight - event.clientY) * window.devicePixelRatio;
}

// Update scroll progress
// Set up scroll triggers for animations
function sectionScroller() {
    const sections = [
        ".section.one",
        ".section.two",
        ".section.three",
        ".section.four",
        ".section.five",
        ".section.six",
        ".section.seven",
        ".section.eight",
        ".section.nine",
        ".section.ten",
    ];
    const scrollToSection = (section) => {
        const sectionElement = document.querySelector(section);
        window.scrollTo({ top: sectionElement.getBoundingClientRect().top, behavior: "smooth" });
    };

    sections.forEach((section, index) => {
        gsap.to({}, {
            duration: 2,
            delay: index * 2,
            onComplete: () => {
                if (index <= 6) {
                    scrollToSection(sections[index + 1]);
                }
            }
        });
    });
}


gsap.to({}, {
    delay: 4,
    duration: 2,
    scrollTrigger: {
        trigger: ".section.four",
        scrub: true,
    }
});

gsap.to(uniforms.iAnimProgress_1.value, {
    x: 1,
    scrollTrigger: {
        trigger: ".section.one",
        start: "0%",
        end: "100%",
        scrub: true
    }
});
gsap.to(uniforms.iAnimProgress_1.value, {
    y: 1,
    scrollTrigger: {
        trigger: ".section.two",
        start: "0%",
        end: "100%",
        scrub: true
    }
});
gsap.to(uniforms.iAnimProgress_1.value, {
    z: 1,
    scrollTrigger: {
        trigger: ".section.three",
        start: "0%",
        end: "100%",
        scrub: true
    }
});
gsap.to(uniforms.iAnimProgress_2.value, {
    x: 1,
    scrollTrigger: {
        trigger: ".section.four",
        start: "0%",
        end: "100%",
        scrub: true
    }
});
gsap.to(uniforms.iAnimProgress_2.value, {
    y: 1,
    scrollTrigger: {
        trigger: ".section.five",
        start: "0%",
        end: "100%",
        scrub: true,
    }
});
gsap.to(uniforms.iAnimProgress_2.value, {
    z: 1,
    scrollTrigger: {
        trigger: ".section.six",
        start: "0%",
        end: "100%",
        scrub: true
    }
});

gsap.to(uniforms.iAnimProgress_3.value, {
    x: 1,
    scrollTrigger: {
        trigger: ".section.seven",
        start: "0%",
        end: "100%",
        scrub: true
    }
});
gsap.to(uniforms.iAnimProgress_3.value, {
    y: 1,
    scrollTrigger: {
        trigger: ".section.eight",
        start: "0%",
        end: "100%",
        scrub: true
    }
});
gsap.to(uniforms.iAnimProgress_3.value, {
    z: 1,
    scrollTrigger: {
        trigger: ".section.nine",
        start: "0%",
        end: "100%",
        scrub: true
    }
});
gsap.to(uniforms.iAnimProgress_4.value, {
    x: 1,
    scrollTrigger: {
        trigger: ".section.ten",
        start: "0%",
        end: "100%",
        scrub: true
    }
});

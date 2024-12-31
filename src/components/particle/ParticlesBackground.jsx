import React, { useEffect } from 'react';

const ParticlesBackground = () => {
  useEffect(() => {
    // Function to load external scripts dynamically
    const loadScript = (src, id) => {
      if (!document.getElementById(id)) {
        const script = document.createElement('script');
        script.src = src;
        script.id = id;
        script.async = true;
        document.body.appendChild(script);
      }
    };

    // Load particles.js and stats.js
    loadScript('http://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js', 'particles-js');
    loadScript('http://threejs.org/examples/js/libs/stats.min.js', 'stats-js');

    const initializeParticles = () => {
      if (window.particlesJS) {
        // Particles.js configuration
        window.particlesJS('particles-js', {
          particles: {
            number: { value: 50, density: { enable: true, value_area: 800 } },
            color: { value: '#FFFCE1' },
            shape: {
              type: 'circle',
              stroke: { width: 0, color: '#000000' },
              polygon: { nb_sides: 5 },
              image: { src: 'img/github.svg', width: 100, height: 100 },
            },
            opacity: {
              value: 1,
              random: true,
              anim: { enable: true, speed: 1, opacity_min: 0, sync: false },
            },
            size: {
              value: 2,
              random: true,
              anim: { enable: false, speed: 4, size_min: 0.3, sync: false },
            },
            line_linked: {
              enable: false,
              distance: 150,
              color: '#ffffff',
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 0.1,
              direction: 'none',
              random: true,
              straight: false,
              out_mode: 'out',
              bounce: false,
              attract: { enable: false, rotateX: 600, rotateY: 600 },
            },
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: { enable: false, mode: 'repulse' },
              onclick: { enable: false, mode: 'repulse' },
              resize: true,
            },
            modes: {
              grab: { distance: 400, line_linked: { opacity: 1 } },
              bubble: { distance: 250, size: 0, duration: 2, opacity: 0, speed: 3 },
              repulse: { distance: 95.722, duration: 0.4 },
              push: { particles_nb: 4 },
              remove: { particles_nb: 2 },
            },
          },
          retina_detect: true,
        });
      }

      if (window.Stats) {
        const stats = new window.Stats();
        stats.setMode(0); // Show FPS panel
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.left = '0px';
        stats.domElement.style.top = '0px';
        document.body.appendChild(stats.domElement);

        const countParticles = document.createElement('div');
        countParticles.className = 'js-count-particles count-particles';
        document.body.appendChild(countParticles);

        const update = () => {
          stats.begin();
          stats.end();
          if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
            countParticles.innerText = window.pJSDom[0].pJS.particles.array.length;
          }
          requestAnimationFrame(update);
        };

        requestAnimationFrame(update);
      }
    };

    const timer = setTimeout(() => initializeParticles(), 500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      id="particles-js"
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'tansparent',
        overflow: 'hidden',
      }}
    ></div>
  );
};

export default ParticlesBackground;

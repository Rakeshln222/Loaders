document.addEventListener('DOMContentLoaded', () => {
    // Helper to add spans
    function addSpans(loader, count) {
      for (let i = 0; i < count; i++) {
        loader.appendChild(document.createElement('span'));
      }
    }
    // Loader 2: Pulse Dots (needs 1 span)
  document.querySelectorAll('.loader-2').forEach(loader => addSpans(loader, 1));
    // Loader 3: Wave Bars (needs 5 spans)
  document.querySelectorAll('.loader-3').forEach(loader => addSpans(loader, 5));
    // Loader 4: 3D Cube (needs 1 span)
  document.querySelectorAll('.loader-4').forEach(loader => addSpans(loader, 1));
    // Loader 5: Colorful Rings (needs 3 spans)
  document.querySelectorAll('.loader-5').forEach(loader => addSpans(loader, 3));
    // Loader 6: Fading Circles (needs 2 spans)
  document.querySelectorAll('.loader-6').forEach(loader => addSpans(loader, 2));
    // Loader 7: Jumping Balls (needs 3 spans)
  document.querySelectorAll('.loader-7').forEach(loader => addSpans(loader, 3));
    // Loader 8: Rotating Dots (needs 5 spans)
  document.querySelectorAll('.loader-8').forEach(loader => addSpans(loader, 5));
    // Loader 9: Liquid Fill (needs 1 div.liquid)
  document.querySelectorAll('.loader-9').forEach(loader => {
      const liquid = document.createElement('div');
      liquid.className = 'liquid';
      loader.appendChild(liquid);
    });
    // Loader 12: Hexagon Spin (needs 6 spans)
  document.querySelectorAll('.loader-12').forEach(loader => addSpans(loader, 6));
    // Loader 13: Star Twinkle (needs 4 spans)
  document.querySelectorAll('.loader-13').forEach(loader => addSpans(loader, 4));
    // Loader 14: DNA Helix (needs 4 spans)
  document.querySelectorAll('.loader-14').forEach(loader => addSpans(loader, 4));
    // Loader 15: Firefly Glow (needs 4 spans)
  document.querySelectorAll('.loader-15').forEach(loader => addSpans(loader, 4));
    // Loader 16: Infinity Loop (needs 2 spans)
  document.querySelectorAll('.loader-16').forEach(loader => addSpans(loader, 2));
    // Loader 17: Pacman (needs .pacman and .dots with 3 spans)
  document.querySelectorAll('.loader-17').forEach(loader => {
      const pacman = document.createElement('div');
      pacman.className = 'pacman';
      loader.appendChild(pacman);
      const dots = document.createElement('div');
      dots.className = 'dots';
      for (let i = 0; i < 3; i++) {
        dots.appendChild(document.createElement('span'));
      }
      loader.appendChild(dots);
    });
    // Loader 18: Falling Drops (needs 3 spans)
  document.querySelectorAll('.loader-18').forEach(loader => addSpans(loader, 3));
    // Loader 19: Rotating Squares (needs 4 spans)
  document.querySelectorAll('.loader-19').forEach(loader => addSpans(loader, 4));
    // Loader 20: Heartbeat (needs .heart)
  document.querySelectorAll('.loader-20').forEach(loader => {
      const heart = document.createElement('div');
      heart.className = 'heart';
      loader.appendChild(heart);
    });
    // Loader 21: Sunrise (needs .sun and .rays)
  document.querySelectorAll('.loader-21').forEach(loader => {
      const sun = document.createElement('div');
      sun.className = 'sun';
      loader.appendChild(sun);
      const rays = document.createElement('div');
      rays.className = 'rays';
      loader.appendChild(rays);
    });
    // Loader 22: Spiral (needs 6 spans)
  document.querySelectorAll('.loader-22').forEach(loader => addSpans(loader, 6));
    // Loader 23: Magnet (needs .magnet)
  document.querySelectorAll('.loader-23').forEach(loader => {
      const magnet = document.createElement('div');
      magnet.className = 'magnet';
      loader.appendChild(magnet);
    });
    // Loader 24: Rainbow Bars (needs 5 spans)
  document.querySelectorAll('.loader-24').forEach(loader => addSpans(loader, 5));
    // Loader 25: Galaxy (needs .galaxy and .star)
  document.querySelectorAll('.loader-25').forEach(loader => {
      const galaxy = document.createElement('div');
      galaxy.className = 'galaxy';
      loader.appendChild(galaxy);
      const star = document.createElement('div');
      star.className = 'star';
      loader.appendChild(star);
    });
  });

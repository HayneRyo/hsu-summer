import Particles from 'particlesjs';

window.onload = function() {
  Particles.init({
    selector: '.canvas',
    color: '#f7fafc',
    maxParticles: 130,
    connectParticles: true,
  });
};

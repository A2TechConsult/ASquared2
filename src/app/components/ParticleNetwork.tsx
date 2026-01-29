import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  baseY: number; // Base Y position for the wave
  progress: number; // Progress across the screen (0 to 1)
  speed: number;
  amplitude: number; // Wave amplitude
  frequency: number; // Wave frequency
  radius: number;
  lane: number; // Which horizontal lane (row) the particle is in
  phase: number; // Phase offset for the sine wave
}

export function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create particles in horizontal lanes flowing left to right
    const lanes = 4; // Number of horizontal lanes
    const particlesPerLane = 8;
    const particles: Particle[] = [];

    for (let lane = 0; lane < lanes; lane++) {
      const baseY = (canvas.height / (lanes + 1)) * (lane + 1);
      
      for (let i = 0; i < particlesPerLane; i++) {
        particles.push({
          x: (canvas.width / particlesPerLane) * i + Math.random() * 50,
          y: baseY,
          baseY: baseY,
          progress: i / particlesPerLane,
          speed: 0.0003 + Math.random() * 0.0002, // Very slow movement
          amplitude: 15 + Math.random() * 25, // Wave height
          frequency: 0.003 + Math.random() * 0.002, // Wave frequency
          radius: 2 + Math.random() * 1.5,
          lane: lane,
          phase: Math.random() * Math.PI * 2, // Random starting phase
        });
      }
    }

    // Animation
    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle) => {
        // Move particle across the screen
        particle.progress += particle.speed;
        
        // Reset when particle reaches the end
        if (particle.progress > 1) {
          particle.progress = 0;
          particle.phase = Math.random() * Math.PI * 2;
        }

        // Calculate position with sinusoidal wave
        particle.x = particle.progress * canvas.width;
        particle.y = particle.baseY + Math.sin(particle.x * particle.frequency + particle.phase) * particle.amplitude;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(100, 116, 139, 0.4)'; // Subtle gray
        ctx.fill();
      });

      // Draw connections between particles in flow pattern (like PERT diagram)
      particles.forEach((particle, i) => {
        particles.forEach((otherParticle, j) => {
          if (i >= j) return;

          // Connect particles that are:
          // 1. In the same lane and close to each other, OR
          // 2. In adjacent lanes and the first particle is ahead (showing flow/dependency)
          const sameLane = particle.lane === otherParticle.lane;
          const adjacentLane = Math.abs(particle.lane - otherParticle.lane) === 1;
          const flowingForward = particle.progress < otherParticle.progress && 
                                otherParticle.progress - particle.progress < 0.25;

          if ((sameLane && flowingForward) || (adjacentLane && flowingForward)) {
            const dx = otherParticle.x - particle.x;
            const dy = otherParticle.y - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const maxDistance = 250;

            if (distance < maxDistance) {
              const opacity = (1 - distance / maxDistance) * 0.15; // Very subtle
              
              // Draw smooth curved line (Bezier curve for flow effect)
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              
              // Control point for curve - creates flowing effect
              const cpX = particle.x + dx * 0.5;
              const cpY = particle.y + dy * 0.5 - 20; // Slight upward curve
              
              ctx.quadraticCurveTo(cpX, cpY, otherParticle.x, otherParticle.y);
              ctx.strokeStyle = `rgba(100, 116, 139, ${opacity})`;
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          }
        });
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.8 }}
    />
  );
}
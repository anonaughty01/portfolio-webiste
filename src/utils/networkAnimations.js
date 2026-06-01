import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Network particle animation
export const animateNetworkParticles = () => {
  gsap.to('.network-canvas-container', {
    scrollTrigger: {
      trigger: '.network-section:first-of-type',
      start: 'top center',
      end: 'bottom center',
      scrub: 1.5,
    },
  });
};

// Dashboard animation
export const animateDashboard = () => {
  gsap.fromTo(
    '.network-dashboard',
    { opacity: 0, y: -30 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
    }
  );

  gsap.fromTo(
    '.network-stats-display',
    { opacity: 0, scale: 0.9 },
    {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      delay: 0.2,
      ease: 'back.out',
    }
  );
};

// System cards animation
export const animateSystemCards = () => {
  gsap.fromTo(
    '.system-card',
    { opacity: 0, y: 40, rotateY: -20 },
    {
      opacity: 1,
      y: 0,
      rotateY: 0,
      duration: 0.8,
      stagger: {
        amount: 0.6,
        from: 'start',
      },
      ease: 'back.out',
      scrollTrigger: {
        trigger: '.systems-grid',
        start: 'top 70%',
        end: 'top 20%',
        scrub: 1,
      },
    }
  );
};

// Stats cards animation
export const animateStatsCards = () => {
  gsap.fromTo(
    '.stat-card',
    { opacity: 0, scale: 0.8 },
    {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      stagger: 0.15,
      ease: 'back.out',
      scrollTrigger: {
        trigger: '.stats-grid',
        start: 'top 70%',
        end: 'top 20%',
        scrub: 1,
      },
    }
  );
};

// Continuous glow pulse
export const startGlowPulse = () => {
  gsap.to('.stat-value', {
    textShadow: '0 0 20px rgba(0, 217, 255, 0.8)',
    repeat: -1,
    yoyo: true,
    duration: 1.5,
    ease: 'sine.inOut',
    stagger: 0.1,
  });
};

// Initialize all animations
export const initializeNetworkAnimations = () => {
  animateDashboard();
  animateSystemCards();
  animateStatsCards();
  startGlowPulse();
  animateNetworkParticles();

  // Refresh on window resize
  window.addEventListener('resize', () => {
    ScrollTrigger.refresh();
  });
};

export default {
  animateNetworkParticles,
  animateDashboard,
  animateSystemCards,
  animateStatsCards,
  startGlowPulse,
  initializeNetworkAnimations,
};
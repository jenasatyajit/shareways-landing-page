import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

interface LenisOptions {
  lerp?: number;
  duration?: number;
  smoothWheel?: boolean;
  wheelMultiplier?: number;
  touchMultiplier?: number;
  orientation?: 'vertical' | 'horizontal';
  gestureOrientation?: 'vertical' | 'horizontal' | 'both';
  smoothTouch?: boolean;
  autoResize?: boolean;
  anchors?: boolean | object;
}

export function useLenis(options: LenisOptions = {}) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis with default options for slow and smooth scrolling
    const lenis = new Lenis({
      lerp: 0.05, // Lower value for slower scrolling (default is 0.1)
      duration: 1.8, // Longer duration for slower scrolling (default is 1.2)
      smoothWheel: true,
      wheelMultiplier: 0.8, // Reduce the wheel multiplier for slower scrolling
      touchMultiplier: 0.8, // Reduce the touch multiplier for slower scrolling
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothTouch: false,
      autoResize: true,
      anchors: true, // Enable anchor links by default
      ...options, // Override with any custom options
    });

    // Store the Lenis instance in a ref
    lenisRef.current = lenis;

    // Make Lenis available globally for programmatic access
    (window as any).__lenis = lenis;

    // Set up the RAF loop for Lenis
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    // Start the animation
    requestAnimationFrame(raf);

    // Log to confirm Lenis is working
    console.log('Lenis smooth scrolling initialized');

    // Cleanup on unmount
    return () => {
      lenis.destroy();
      lenisRef.current = null;
      (window as any).__lenis = undefined;
    };
  }, [options]);

  return lenisRef;
} 
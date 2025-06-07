import Lenis from 'lenis';

// A simple utility to scroll to a specific element or position
export const scrollTo = (
  target: string | HTMLElement | number, 
  options?: {
    offset?: number;
    duration?: number;
    immediate?: boolean;
  }
) => {
  // Get the Lenis instance from the window object
  const lenis = (window as any).__lenis as Lenis | undefined;
  
  if (!lenis) {
    console.warn('Lenis instance not found. Make sure LenisProvider is properly set up.');
    
    // Fallback to native scrolling
    if (typeof target === 'string') {
      const element = document.querySelector(target);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (typeof target === 'number') {
      window.scrollTo({ top: target, behavior: 'smooth' });
    } else if (target instanceof HTMLElement) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    
    return;
  }
  
  // Use Lenis scrollTo method
  lenis.scrollTo(target, options);
}; 
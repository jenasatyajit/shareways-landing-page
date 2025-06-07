import { useEffect } from 'react';
import { scrollTo } from '@/utils/lenis';

export function SmoothLinks() {
  useEffect(() => {
    // Function to handle clicks on anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check if it's an anchor link
      const isAnchor = target.tagName === 'A' || target.closest('a');
      
      if (isAnchor) {
        const anchor = target.tagName === 'A' ? target : target.closest('a');
        const href = anchor?.getAttribute('href');
        
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const targetId = href.substring(1);
          
          // Use Lenis for smooth scrolling
          scrollTo(`#${targetId}`, {
            offset: 50,
            duration: 1.5,
          });
        }
      }
    };

    // Add event listener
    document.addEventListener('click', handleAnchorClick);

    // Cleanup
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return null;
} 
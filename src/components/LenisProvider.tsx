import { ReactNode } from 'react';
import { useLenis } from '@/hooks/useLenis';
import 'lenis/dist/lenis.css'; // Import the recommended CSS

interface LenisProviderProps {
  children: ReactNode;
}

export function LenisProvider({ children }: LenisProviderProps) {
  // Initialize Lenis with the custom hook
  useLenis();
  
  return <>{children}</>;
} 
import React, { useEffect, useRef, useState, ReactNode } from 'react';
import ColorTransition from '@/decorators/color-transitions/color-transition';
import { TestId } from '@/types/test-id';

/**
 * Props for the ScrollColorTransition component.
 */
export interface ScrollColorTransitionProps extends TestId {
  /**
   * Child components to be rendered inside the ScrollColorTransition.
   */
  children: ReactNode;

  /**
   * Custom class name to apply to the container.
   */
  className?: string;

  /**
   * Threshold value between 0 and 1 that determines when the color transition starts.
   * Lower values make the transition start sooner as the element scrolls out of view.
   * Default: 0.3
   */
  threshold?: number;

  /**
   * Duration of the color transition animation in milliseconds.
   * Default: 300
   */
  speed?: number;

  /**
   * Initial color before scrolling (CSS color value).
   * Default: 'currentColor'
   */
  fromColor?: string;

  /**
   * Target color when scrolled (CSS color value).
   * Default: '#cccccc'
   */
  toColor?: string;

  /**
   * Animation type to use for the color transition.
   * Default: 'fade-in'
   */
  animation?: string;
}

// Helper function to interpolate between two hex colors
const interpolateColor = (color1: string, color2: string, factor: number) => {
  // Handle non-hex colors by returning one of them based on factor
  if (!color1.startsWith('#') || !color2.startsWith('#')) {
    return factor > 0.5 ? color2 : color1;
  }

  function parse(hex: string) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return [r, g, b];
  }

  const [r1, g1, b1] = parse(color1);
  const [r2, g2, b2] = parse(color2);

  const r = Math.round(r1 + factor * (r2 - r1));
  const g = Math.round(g1 + factor * (g2 - g1));
  const b = Math.round(b1 + factor * (b2 - b1));

  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
};

/**
 * ScrollColorTransition component that transitions color as content scrolls out of the viewport.
 * Uses the ColorTransition component as a decorator for the color effect.
 */
export const ScrollColorTransition: React.FC<ScrollColorTransitionProps> = ({
  children,
  className = '',
  testId = 'scroll-color-transition',
  threshold = 0.3,
  speed = 300,
  fromColor = 'currentColor',
  toColor = '#cccccc',
  animation = 'fade-in'
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Calculate the current color based on scroll progress with interpolation
  const calculateColor = () => {
    if (scrollProgress <= 0) return fromColor;
    if (scrollProgress >= 1) return toColor;

    // Smooth interpolation between colors
    return interpolateColor(fromColor, toColor, scrollProgress);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observerOptions = {
      threshold: Array.from({ length: 20 }, (_, i) => i / 20), // More granular thresholds
      rootMargin: '0px'
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      const entry = entries[0];
      if (!entry) return;

      // Calculate progress based on intersection ratio
      const visibilityRatio = entry.intersectionRatio;
      const progress = Math.max(0, 1 - visibilityRatio / threshold);
      setScrollProgress(Math.min(1, progress));
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );
    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return (
    <div
      ref={containerRef}
      className={`scroll-color-transition__container ${className}`}
      data-testid={testId}>
      <ColorTransition
        color={calculateColor()}
        speed={speed}
        animation={animation}
        mode='controlled'
        testId={`${testId}-color-transition`}>
        {children}
      </ColorTransition>
    </div>
  );
};

export default ScrollColorTransition;

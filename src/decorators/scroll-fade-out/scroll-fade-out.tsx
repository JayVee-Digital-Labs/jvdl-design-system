import React, { useEffect, useRef, useState, ReactNode } from 'react';
import FadeOut from '@/decorators/fade-out/fade-out';
import { TestId } from '@/types/test-id';
import '@/styles/animations/fade-out.scss';

/**
 * Props for the ScrollFadeOut component.
 */
export interface ScrollFadeOutProps extends TestId {
  /**
   * Child components to be rendered inside the ScrollFadeOut.
   */
  children: ReactNode;

  /**
   * Custom class name to apply to the container.
   */
  className?: string;

  /**
   * Threshold value between 0 and 1 that determines when the fade effect starts.
   * Lower values make the fade start sooner as the element scrolls out of view.
   * Default: 0.3
   */
  threshold?: number;

  /**
   * Duration of the fade-out animation in milliseconds.
   * Default: 300
   */
  duration?: number;
}

/**
 * ScrollFadeOut component that fades out content as it scrolls out of the viewport.
 * Uses the FadeOut component as a decorator for the fade effect.
 */
export const ScrollFadeOut: React.FC<ScrollFadeOutProps> = ({
  children,
  className = '',
  testId = 'scroll-fade-out',
  threshold = 0.3,
  duration = 300
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observerOptions = {
      threshold: Array.from({ length: 10 }, (_, i) => i / 10), // Create array [0, 0.1, 0.2, ..., 0.9]
      rootMargin: '0px'
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      const entry = entries[0];
      if (!entry) return;

      // Calculate opacity based on intersection ratio
      const visibilityRatio = entry.intersectionRatio;
      const mappedOpacity = Math.min(1, visibilityRatio / threshold);
      setOpacity(mappedOpacity);
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
      className={`scroll-fade-out__container ${className}`}
      data-testid={testId}>
      <FadeOut
        opacity={opacity}
        duration={duration}
        mode='controlled'
        testId={`${testId}-fade-out`}>
        {children}
      </FadeOut>
    </div>
  );
};

export default ScrollFadeOut;

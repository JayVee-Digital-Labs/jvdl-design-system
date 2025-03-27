import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { TestId } from '@/types/test-id';
import '@/styles/animations/negate.scss';

/**
 * Props for the NegateAnimationDecorator component.
 */
export interface NegateAnimationProps extends TestId {
  /**
   * Child components to be rendered inside the NegateAnimationDecorator.
   */
  children: React.ReactNode;

  /**
   * Custom class name to apply to the container.
   */
  className?: string;

  /**
   * Whether the element should stick to a fixed position when scrolling.
   * Default: false
   */
  fixed?: boolean;

  /**
   * Position where the element should stick when fixed is true.
   * Default: 'top'
   */
  fixedPosition?: 'top' | 'bottom';

  /**
   * Offset from the fixedPosition in pixels.
   * Default: 0
   */
  fixedOffset?: number;

  /**
   * Scroll threshold in viewport height percentage (0-100) at which the element becomes fixed.
   * For example, 20 means the element becomes fixed after scrolling 20% of viewport height.
   * Default: 0 (fixes immediately)
   */
  fixedThreshold?: number;
}

/**
 * NegateAnimationDecorator component that prevents animations from being applied
 * to its child elements when nested inside an animation transition decorator.
 * Uses a Portal to render content outside the animation hierarchy.
 */
const NegateAnimation: React.FC<NegateAnimationProps> = ({
  children,
  className = '',
  testId = 'negate-animation',
  fixed = false,
  fixedPosition = 'top',
  fixedOffset = 0,
  fixedThreshold = 0
}) => {
  const [portalContainer, setPortalContainer] = useState<HTMLDivElement | null>(
    null
  );
  const [position, setPosition] = useState<DOMRect | null>(null);
  const [isFixed, setIsFixed] = useState(false);
  const [initialPosition, setInitialPosition] = useState<{
    top: number;
    left: number;
  } | null>(null);

  // Create the portal container when component mounts
  useEffect(() => {
    const container = document.createElement('div');
    container.className = `negate-animation__portal ${className}`;
    container.dataset.testid = testId;
    document.body.appendChild(container);
    setPortalContainer(container);

    return () => {
      document.body.removeChild(container);
    };
  }, [className, testId]);

  // Track the position of the placeholder and handle fixed positioning
  useEffect(() => {
    if (!portalContainer) return;

    const updatePosition = () => {
      const placeholder = document.getElementById(
        `negate-placeholder-${testId}`
      );
      if (!placeholder) return;

      const rect = placeholder.getBoundingClientRect();

      // Save initial position on first render
      if (!initialPosition) {
        setInitialPosition({
          top: rect.top + window.scrollY,
          left: rect.left + window.scrollX
        });
      }

      // Check if we should switch to fixed positioning
      if (fixed) {
        const shouldBeFixed =
          rect.top <=
          (fixedPosition === 'top'
            ? fixedOffset
            : window.innerHeight - rect.height - fixedOffset);

        setIsFixed(shouldBeFixed);
      }

      setPosition(rect);
    };

    // Update position immediately and on window resize/scroll
    updatePosition();
    window.addEventListener('resize', updatePosition);
    window.addEventListener('scroll', updatePosition);

    return () => {
      window.removeEventListener('resize', updatePosition);
      window.removeEventListener('scroll', updatePosition);
    };
  }, [
    portalContainer,
    testId,
    fixed,
    fixedPosition,
    fixedOffset,
    fixedThreshold,
    initialPosition
  ]);

  // Position the portal content
  useEffect(() => {
    if (!portalContainer || !position) return;

    if (fixed && isFixed) {
      // Fixed positioning
      Object.assign(portalContainer.style, {
        position: 'fixed',
        top: fixedPosition === 'top' ? `${fixedOffset}px` : 'auto',
        bottom: fixedPosition === 'bottom' ? `${fixedOffset}px` : 'auto',
        left: `${position.left}px`,
        width: `${position.width}px`,
        height: `${position.height}px`,
        zIndex: '1000'
      });
    } else {
      // Normal positioning that follows the placeholder
      Object.assign(portalContainer.style, {
        position: 'fixed',
        top: `${position.top}px`,
        left: `${position.left}px`,
        width: `${position.width}px`,
        height: `${position.height}px`,
        zIndex: '1000'
      });
    }
  }, [portalContainer, position, fixed, isFixed, fixedPosition, fixedOffset]);

  // Create placeholder element to track location in DOM
  const placeholder = (
    <div
      id={`negate-placeholder-${testId}`}
      className='negate-animation__placeholder'
      style={{
        visibility: 'hidden',
        width: '100%',
        height: '100%'
      }}
      data-testid={`${testId}-placeholder`}
    />
  );

  // Portal content to the separate container
  return (
    <>
      {placeholder}
      {portalContainer &&
        ReactDOM.createPortal(
          <div
            className={`negate-animation__content ${isFixed ? 'negate-animation__content--fixed' : ''}`}>
            {children}
          </div>,
          portalContainer
        )}
    </>
  );
};

export default NegateAnimation;

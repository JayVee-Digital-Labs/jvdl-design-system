import React, { useEffect, useState, useRef } from 'react';
import BackgroundImage, {
  BackgroundImageProps
} from '@/elements/background-image/background-image';
import Avatar, { AvatarProps } from '@/components/avatar/avatar';
import Heading, { HeadingProps } from '@/elements/heading/heading';
import SocialMediaBar, {
  SocialMediaBarProps
} from '@/components/social-media-bar/social-media-bar';
import SimpleNavBar, {
  SimpleNavBarProps
} from '@/components/simple-nav-bar/simple-nav-bar';
import { TestId } from '@/types/test-id';

/**
 * HeroProps interface for Hero component.
 *
 * @param backgroundProps - Props for the background image.
 * @param avatarProps - Props for the avatar image.
 * @param headingProps - Props for the main (level 1) heading.
 * @param subheadingProps - Props for the subheading (level 2).
 * @param socialMediaProps - Props for the social media bar.
 * @param navBarProps - Props for the navigation bar.
 * @param scrollThreshold - Scroll threshold to trigger fade/transition (default: 200).
 */
export interface HeroProps extends TestId {
  /** Props for the background image */
  backgroundProps: Omit<BackgroundImageProps, 'testId' | 'children'>;
  /** Props for the avatar image */
  avatarProps: Omit<AvatarProps, 'testId'>;
  /** Props for the main heading (level 1) */
  headingProps: Omit<HeadingProps, 'testId' | 'level'>;
  /** Props for the subheading (level 2) */
  subheadingProps: Omit<HeadingProps, 'testId' | 'level'>;
  /** Props for the social media bar */
  socialMediaProps: Omit<SocialMediaBarProps, 'testId'>;
  /** Props for the simple navigation bar */
  navBarProps: Omit<SimpleNavBarProps, 'testId'>;
  /** Scroll threshold to trigger transitions */
  scrollThreshold?: number;
}

const Hero: React.FC<HeroProps> = ({
  backgroundProps,
  avatarProps,
  headingProps,
  subheadingProps,
  socialMediaProps,
  navBarProps,
  testId
  // scrollThreshold is no longer used directly for fade calculation
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null); // Create a ref for the main div

  useEffect(() => {
    const handleScroll = () => {
      const SCROLL_START = 0.5;

      if (heroRef.current) {
        const element = heroRef.current;
        const elementTop = element.offsetTop;
        const elementHeight = element.offsetHeight;
        const viewportTop = window.scrollY;

        // Define the scroll range where fading occurs
        const fadeStartScroll = elementTop + elementHeight * SCROLL_START; // Start fading at SCROLL_START down the element
        const fadeEndScroll = elementTop + elementHeight; // End fading when the bottom of the element reaches the top of the viewport

        const currentScroll = viewportTop;

        let progress = 0;
        if (currentScroll >= fadeStartScroll) {
          // Calculate progress only within the fade range
          progress =
            (currentScroll - fadeStartScroll) /
            (fadeEndScroll - fadeStartScroll);
        }

        // Clamp progress between 0 and 1
        progress = Math.max(0, Math.min(progress, 1));

        // Prevent NaN if fadeEndScroll equals fadeStartScroll (e.g., elementHeight is 0)
        if (isNaN(progress)) {
          progress = currentScroll >= fadeEndScroll ? 1 : 0;
        }

        setScrollProgress(progress);
      }
    };

    // Initial calculation in case the page loads scrolled
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    // Add resize listener in case element height changes
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []); // Empty dependency array, calculations depend on DOM state read inside

  // Compute nav bar classes based on scroll progress (using a fixed threshold for simplicity)
  // You might want to adjust this logic based on the new progress calculation if needed
  const navBarThreshold = 0.1; // Example: Change nav bar style after 10% scroll through the hero
  const navBarClass =
    scrollProgress < navBarThreshold
      ? 'fixed top-0 left-0 w-full bg-transparent text-white transition-colors duration-300'
      : 'fixed top-0 left-0 w-full bg-gray-900 text-white transition-colors duration-300';

  return (
    // Attach the ref to the main div
    <div
      ref={heroRef}
      data-testid={testId}
      className='relative min-h-screen overflow-hidden'>
      {/* Background image container with fading effect */}
      <div
        style={{
          opacity: 1 - scrollProgress,
          transition: 'opacity 0.1s linear', // Adjust transition timing if needed
          position: 'absolute',
          inset: 0,
          zIndex: 0
        }}>
        <BackgroundImage
          source={backgroundProps.source}
          opacity={backgroundProps.opacity}
          testId={`${testId}-bg`}
        />
      </div>

      {/* Fixed NavBar */}
      <div className={navBarClass} style={{ zIndex: 20 }}>
        <SimpleNavBar {...navBarProps} testId={`${testId}-nav`} />
      </div>

      {/* Hero Content */}
      <div
        style={{
          opacity: 1 - scrollProgress,
          transition: 'opacity 0.1s linear' // Match transition timing
        }}
        className='flex flex-col items-center justify-center min-h-screen relative z-10'>
        <div className='flex items-center justify-center min-h-screen w-full'>
          <div className='flex flex-col gap-y-10 items-center text-center'>
            <Avatar {...avatarProps} testId={`${testId}-avatar`} />
            {/* Main Heading Level 1 */}
            <Heading level={1} {...headingProps} testId={`${testId}-heading`} />
            {/* Subheading Level 2 */}
            <Heading
              level={2}
              {...subheadingProps}
              testId={`${testId}-subheading`}
            />
            {/* Social Media Bar */}
            <SocialMediaBar {...socialMediaProps} testId={`${testId}-social`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

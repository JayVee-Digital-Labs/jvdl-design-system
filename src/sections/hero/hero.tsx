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
}) => {
  const [contentScrollProgress, setContentScrollProgress] = useState(0);
  const [showFixedNavBar, setShowFixedNavBar] = useState(false); // State to control fixed nav visibility/style
  const heroRef = useRef<HTMLDivElement>(null);
  const inlineNavBarRef = useRef<HTMLDivElement>(null); // Ref for the inline navbar

  useEffect(() => {
    // Store the calculated position to avoid recalculating constantly if not needed
    let inlineNavBarTopPosition = 0;

    const calculatePositions = () => {
      if (inlineNavBarRef.current) {
        // Calculate position relative to the document top
        inlineNavBarTopPosition = inlineNavBarRef.current.offsetTop;
      }
    };

    const handleScroll = () => {
      const CONTENT_FADE_START_RATIO = 0.5;
      const viewportTop = window.scrollY;

      // --- Content Fade Calculation ---
      if (heroRef.current) {
        // ... same calculation logic for contentScrollProgress ...
        const element = heroRef.current;
        const elementTop = element.offsetTop;
        const elementHeight = element.offsetHeight;

        const fadeStartScroll =
          elementTop + elementHeight * CONTENT_FADE_START_RATIO;
        const fadeEndScroll = elementTop + elementHeight;
        const currentScroll = viewportTop;

        let progress = 0;
        if (currentScroll >= fadeStartScroll) {
          progress =
            fadeEndScroll - fadeStartScroll <= 0 // Avoid division by zero
              ? 1
              : (currentScroll - fadeStartScroll) /
                (fadeEndScroll - fadeStartScroll);
        }
        progress = Math.max(0, Math.min(progress, 1));
        if (isNaN(progress)) {
          progress = currentScroll >= fadeEndScroll ? 1 : 0;
        }
        setContentScrollProgress(progress);
      }

      // --- Fixed Nav Bar Visibility Calculation ---
      // Show the fixed bar if we've scrolled past the top of the inline bar's position
      if (inlineNavBarTopPosition > 0) {
        // Ensure position was calculated
        setShowFixedNavBar(viewportTop > inlineNavBarTopPosition);
      } else {
        // Fallback or initial state before position is known
        setShowFixedNavBar(false);
      }
    };

    // Calculate initial positions after mount
    calculatePositions();
    // Run scroll handler initially
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    // Recalculate positions on resize
    window.addEventListener('resize', () => {
      calculatePositions();
      handleScroll(); // Re-run scroll logic after resize
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', calculatePositions); // Clean up resize listener too
    };
  }, []); // Empty dependency array, calculations depend on DOM state

  // Determine fixed nav bar style based on showFixedNavBar state
  const fixedNavBarBaseClass =
    'fixed top-0 left-0 w-full transition-opacity duration-300';
  const fixedNavBarStyleClass = showFixedNavBar
    ? 'opacity-100' // Dark background, visible
    : 'bg-transparent opacity-0 pointer-events-none'; // Transparent, hidden

  return (
    <div
      ref={heroRef}
      data-testid={testId}
      className='relative min-h-screen overflow-hidden'>
      {/* Background image container with fading effect (tied to content fade) */}
      <div
        style={{
          opacity: 1 - contentScrollProgress, // Fades with content
          transition: 'opacity 0.1s linear',
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

      {/* Fixed Top NavBar (Appears when inline starts fading) */}
      <div
        className={`${fixedNavBarBaseClass} ${fixedNavBarStyleClass} flex justify-center`}
        style={{ zIndex: 20 }}>
        <SimpleNavBar
          {...navBarProps}
          // Use default colors (not forced white) when the fixed bar is visible
          forceWhiteText={false}
          testId={`${testId}-fixed-nav`}
        />
      </div>

      {/* Hero Content (Fades out, includes inline navbar) */}
      <div
        style={{
          opacity: 1 - contentScrollProgress,
          transition: 'opacity 0.1s linear'
        }}
        className='flex flex-col items-center justify-center min-h-screen relative z-10'>
        <div className='flex items-center justify-center min-h-screen w-full'>
          <div className='flex flex-col gap-y-10 items-center text-center'>
            <Avatar {...avatarProps} testId={`${testId}-avatar`} />
            <Heading level={1} {...headingProps} testId={`${testId}-heading`} />
            <Heading
              level={2}
              {...subheadingProps}
              testId={`${testId}-subheading`}
            />
            <SocialMediaBar {...socialMediaProps} testId={`${testId}-social`} />
            {/* Inline SimpleNavBar (Attach ref here) */}
            {/* Wrap in a div to easily get ref and position */}
            <div ref={inlineNavBarRef}>
              <SimpleNavBar
                {...navBarProps}
                forceWhiteText={headingProps.isWhite} // White text initially
                testId={`${testId}-inline-nav`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

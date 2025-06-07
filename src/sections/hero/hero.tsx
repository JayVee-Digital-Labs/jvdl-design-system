import { SocialMediaBar, SocialMediaBarProps } from '@/components';
import {
  BackgroundImage,
  type BackgroundImageProps,
  Container,
  Heading
} from '@/elements';
import { TestId } from '@/types/test-id';

export interface HeroProps extends TestId {
  title: string;
  subtitle: string;
  socialMediaBarProps: SocialMediaBarProps;
  backgroundImageProps: BackgroundImageProps;
  showPercentageFullScreen?: number; // New prop to control height percentage
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  socialMediaBarProps,
  backgroundImageProps,
  showPercentageFullScreen,
  testId
}: HeroProps) => {
  // Calculate height style based on the prop
  const heightStyle = {
    height: showPercentageFullScreen ? `${showPercentageFullScreen}vh` : '100vh'
  };

  return (
    <div data-testid={testId} style={heightStyle} className='w-full'>
      <BackgroundImage
        {...backgroundImageProps}
        className={showPercentageFullScreen ? undefined : 'min-h-screen'}>
        <Container>
          <div className='h-full flex flex-col items-center justify-center gap-10'>
            <Heading level={1} isWhite>
              {title}
            </Heading>
            <Heading level={2} isWhite>
              {subtitle}
            </Heading>
            <SocialMediaBar {...socialMediaBarProps} />
          </div>
        </Container>
      </BackgroundImage>
    </div>
  );
};

export default Hero;

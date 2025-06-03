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
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  socialMediaBarProps,
  backgroundImageProps,
  testId
}: HeroProps) => {
  return (
    <div data-testid={testId}>
      <BackgroundImage {...backgroundImageProps}>
        <Container>
          <div className='min-h-screen flex flex-col items-center justify-center gap-10'>
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

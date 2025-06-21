import React from 'react';
import { Avatar } from '@/components';
import { Heading, type HeaderLevels } from '@/elements';
import { TestId } from '@/types';

/**
 * Props for the Headline component
 */
export interface HeadlineProps extends TestId {
  /** Source URL for the avatar image */
  source: string;
  /** Text content for the heading */
  text: string;
  /** Description text to display below the heading */
  description: string;
  /** Heading level to use (default: h3) */
  headingLevel?: HeaderLevels;
}

export const Headline: React.FC<HeadlineProps> = ({
  source,
  text,
  description,
  headingLevel = 3,
  testId = 'headline'
}) => {
  const avatarTestId = `${testId}-avatar`;
  return (
    <div className='flex flex-col items-center space-y-8' data-testid={testId}>
      <Avatar
        alt={avatarTestId}
        src={source}
        size='xlarge'
        testId={avatarTestId}
      />

      <div className='text-left w-full space-y-4'>
        <Heading level={headingLevel} testId={`${testId}-heading`}>
          {text}
        </Heading>

        <p className='text-gray-600' data-testid={`${testId}-description`}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default Headline;

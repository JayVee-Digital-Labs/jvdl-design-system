import React from 'react';
import { TestId } from '@/types/test-id';

export type HeaderLevels = 1 | 2 | 3 | 4 | 5 | 6;

export interface HeadingProps extends TestId {
  /**
   * Renders h1 to h6 tags based on the level prop.
   */
  level: HeaderLevels;

  /**
   * Content.
   */
  children: React.ReactNode;

  /**
   * Custom Tailwind color class for the heading text. When provided, this will override the default text color.
   * Example: 'text-red-500', 'text-blue-600', 'text-green-400', etc.
   */
  headingColor?: string;

  /**
   * Override text color to white.
   * @deprecated Use `headingColor` prop instead. This prop will be removed in a future version.
   */
  isWhite?: boolean;
}

const Heading: React.FC<HeadingProps> = ({
  level,
  children,
  testId = '',
  headingColor,
  isWhite = false
}) => {
  const Tag = `h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

  // Text color based on headingColor prop (priority) or isWhite prop (deprecated)
  const getTextColorClass = (): string => {
    if (headingColor) {
      return headingColor; // Use custom Tailwind class
    }
    return isWhite ? 'text-primary-font-white' : 'text-primary-font-color';
  };

  const textColorClass = getTextColorClass();

  // Level-specific classes for font size and weight
  const getLevelClasses = () => {
    switch (level) {
      case 1:
        return 'text-5xl font-extrabold';
      case 2:
        return 'text-4xl font-extrabold';
      case 3:
        return 'text-3xl font-extrabold';
      case 4:
        return 'text-2xl font-bold';
      case 5:
        return 'text-xl font-bold';
      case 6:
        return 'text-lg font-bold';
      default:
        return '';
    }
  };

  return (
    <Tag
      className={`font-dm-sans break-words ${textColorClass} ${getLevelClasses()}`}
      data-testid={testId}>
      {children}
    </Tag>
  );
};

export default Heading;

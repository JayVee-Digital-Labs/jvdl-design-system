import React from 'react';
import { TestId } from '@/types/test-id'

export interface ContainerProps extends TestId {

  /**
   * Optional margin-left CSS value
   */
  marginLeft?: string; // Optional margin-left CSS value

  /**
   * Optional margin-right CSS value
   */
  marginRight?: string;

  /**
   * Optional margin-top CSS value
   */
  marginTop?: string;

  /**
   * Optional margin-bottom CSS value
   */
  marginBottom?: string;

  /**
   * The content to be rendered inside the container
   */
  children: React.ReactNode;
}

export const defaultMargin = '20px';

const Container: React.FC<ContainerProps> = ({ 
  marginLeft = defaultMargin, 
  marginRight = defaultMargin, 
  marginTop = defaultMargin, 
  marginBottom = defaultMargin, 
  testId, 
  children }) => {
  const containerStyle = {
    marginLeft,
    marginRight,
    marginTop,
    marginBottom,
  };

  return <div style={containerStyle} data-testid={testId}>{children}</div>;
};

export default Container;

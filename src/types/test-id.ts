/**
 * Extendable interface for adding testId to components
 */
export interface TestId {

  /**
   * Test ID for testing purposes. This will render as a data-testid attribute.
   */
  testId?: string;
}
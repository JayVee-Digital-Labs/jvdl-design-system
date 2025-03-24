import React from 'react';
import ColorTransition from './color-transition';
import Heading from '@/elements/heading/heading';

/**
 * FIXME: This test is failing because the `realHover` command is not working as expected. It turns out there is solution at the time to do a animation screenshot test with cypress and the `realHover` command.
 * @{link:https://github.com/dmtrKovalenko/cypress-real-events?tab=readme-ov-file#1-why-cyrealhover-hovering-state-does-not-show-in-the-visual-regression-services}
 */
describe.skip('ColorTransition', () => {
  it('should render a heading with hover fade-in animation and purple color', () => {
    const speed = 100;
    const testId = 'heading-decorator';
    cy.mount(
      <ColorTransition
        animation='fade-in'
        color='red'
        speed={speed}
        testId='hover-fade-in-red'>
        <Heading level={1} testId={testId}>
          Hover over this Heading
        </Heading>
      </ColorTransition>
    );

    cy.findByTestId(testId)
      .realHover({
        pointer: 'mouse',
        position: 'center'
      })
      .wait(speed + 200)
      .matchImageSnapshot({
        disableTimersAndAnimations: false
      });
  });
});

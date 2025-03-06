import React from 'react'
import Heading, { HeaderLevels } from './heading'

describe('heading', () => {
  const levels: HeaderLevels[]  = [1, 2, 3, 4, 5, 6]

  levels.forEach(level => {
    it(`should render the proper heading ${level} tag`, () => {
      const testId = `heading-${level}`
      cy.mount(<Heading level={level} testId={testId}>This is a H{level} Element</Heading>)
      cy.findByTestId(testId).matchImageSnapshot()
    })
  })
})
import React from 'react'
import Heading from './heading'

describe('<Heading />', () => {
  it('should render ', () => {
    cy.mount(<Heading level={1} testId='heading-1'>This is a H1 Element</Heading>)
  })
})
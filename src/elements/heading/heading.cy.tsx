import React from 'react'
import Heading from './heading'

describe('<Headings />', () => {
  it('should render ', () => {
    cy.mount(<Heading level={1}>This is a H1 Element</Heading>)
  })
})
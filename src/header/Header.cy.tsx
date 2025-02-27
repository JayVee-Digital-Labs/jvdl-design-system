import Header from './Header'

const componentName = 'Header'

describe(`${componentName} Component`, () => {
  beforeEach(() => {
    cy.mount(<Header />)
  })

  it('should match initial snapshot', () => {
    cy.compareSnapshot(componentName)
  })

  it('should render with no issues', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Header />)
  })

  it('should find header text', () => {
    cy.findByText('Test Header').should('exist')
  })
})
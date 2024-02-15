import Header from './Header'

describe('Header Component', () => {
  beforeEach(() => {
    cy.mount(<Header />)
  })

  it('should render with no issues', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Header />)
  })

  it('should find header text', () => {
    cy.findByText('Test Header').should('exist')
  })
})
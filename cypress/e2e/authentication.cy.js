describe('Authentication Test', () => {
  beforeEach(() => {

    cy.visit('http://localhost:5173')
  })

  it('Test Navigation Before Login', () => {
    cy.visit('http://localhost:5173/booking')

    cy.get('[data-cy=emailInput]').should('be.visible')
  })

  it('Test Navigation After Login', () => {
    cy.get('[data-cy=emailInput]').type('a@gmail.com')
    cy.get('[data-cy=passwordInput]').type('1234')
    cy.get('[data-cy=submitButton]').click()

    cy.get('[data-cy=dashboard]').should('be.visible')

    cy.visit('http://localhost:5173/booking')

    cy.get('[data-cy=bookings]').should('be.visible')
  })

  it('Failed Login Test', () => {
    cy.get('[data-cy=emailInput]').type('b@gmail.com')
    cy.get('[data-cy=passwordInput]').type('0000')
    cy.get('[data-cy=submitButton]').click()

    cy.get('[data-cy=emailInput]').should('be.visible')
  })

  it('Succesful Test Login', () => {
    cy.get('[data-cy=emailInput]').type('a@gmail.com')
    cy.get('[data-cy=passwordInput]').type('1234')
    cy.get('[data-cy=submitButton]').click()

    cy.get('[data-cy=dashboard]').should('be.visible')
  })
})
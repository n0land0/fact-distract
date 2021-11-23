describe('header', () => {
  const url = 'localhost:3000';

  before(() => {
    cy.visit(url)
  })

  it('should show a logo', () => {
    cy.get('.turkey-logo')
      .should('be.visible')
  })

  it('should show nav links to new fact and saved facts pages', () => {
    cy.get('.navbar__navlink')
      .should(($navlink) => {
        expect($navlink).to.have.length(2)
      })
  })

  it('should navigate to saved facts page', () => {
    cy.get('.saved').click()
      .url().should('include', '/saved')
  })

  it('should navigate to new fact page', () => {
    cy.get('.generate').click()
      .url().should('not.include', '/saved')
  })

  // it('should show user management settings', () => {
  //   cy.get('.user-mgmt-container')
  //     .should('be.visible')
  // })
})

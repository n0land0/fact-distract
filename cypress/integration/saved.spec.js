describe('saved facts page', () => {
  const url = 'localhost:3000';

  before(() => {
    cy.visit(url)
  })

  it('should display the correct url when the page is visited', () => {
    cy.get('.saved').click()
      .url().should('include', '/saved')
  })

  it('should display a prompt if no facts have been saved', () => {
    cy.get('.prompt__text')
      .should('contain', 'you haven\'t saved any facts yet')
      .get('.prompt__go-home-btn')
      .should('contain', 'let\'s go do that')
  })

  it('should display facts which were saved on the landing page', () => {
    cy.get('.generate').click()
      .get('.save-fact').first().click()
      .get('.saved').click()
      .get('.saved-fact-item')
      .should('be.visible')
  })

  it('should unsave a fact when the corresponding button is clicked', () => {
    cy.get('.saved-fact__unsave-fact-button').click()
      .get('.prompt__text')
      .should('be.visible')
  })
})

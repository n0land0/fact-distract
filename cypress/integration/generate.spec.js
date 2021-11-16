describe('generate new fact page', () => {
  const url = 'localhost:3000';

  before(() => {
    cy.visit(url)
  })

  it('should display the root url when the landing page is visited', () => {
    cy.url().should('not.include', 'saved')
  })

  it('should display a new fact when the landing page is visited', () => {
    // why is stub not substituting for the new fact?
    // cy.intercept('GET', 'https://uselessfacts.jsph.pl/random.json?language=en', {
    //     "id": "d4eda268-f4f8-47e4-bca3-d8ff299f8f3b",
    //     "text": "The electric chair was invented by a dentist.",
    //     "source": "djtech.net",
    //     "source_url": "http://www.djtech.net/humor/useless_facts.htm",
    //     "language": "en",
    //     "permalink": "https://uselessfacts.jsph.pl/d4eda268-f4f8-47e4-bca3-d8ff299f8f3b"
    // })

    cy.get('.current-fact__container')
      .should('contain', 'did you know')
  })

  it('should display a loading message before a new fact loads', () => {
    cy.get('.new-fact').click()
      .get('.loading-message')
      .should('contain', 'loading factoid')
  })

  it('should display a new fact when the new-fact button is clicked', () => {
    cy.get('.new-fact').click()
      .get('.current-fact__container')
        .should('contain', 'did you know')
  })

  it('should display recently generated facts', () => {
    cy.get('.recent-facts-container')
      .get('.recent-fact-1__container')
      .get('.recent-fact-1__text')
      .should('be.visible')
  })

  it('should display up to 3 recently generated facts', () => {
    cy.get('.new-fact').click()
      .get('.new-fact').click()
      .get('.recent-facts-container > article')
      .should(($article) => {
        expect($article).to.have.length(3)
      })
  })

  it('should reflect reflect whether a fact has been saved via its button', () => {
    cy.get('.recent-facts-container')
      .get('img').first()
      .should(($img) => {
        const className = $img[0].className;
        expect(className).to.eq('heart-icon');
      })
      .get('.save-fact').first().click()
      .get('img').first()
      .should(($img) => {
        const className = $img[0].className;
        expect(className).to.eq('broken-heart-icon');
      })
  })
})

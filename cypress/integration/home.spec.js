/// <reference types="Cypress" />

context('End 2 End Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  // https://on.cypress.io/interacting-with-elements

  it('should render the data', () => {
    // spinner should be visible
    cy.get('.rg-spinner-eclipse')
      .should('be', 'visible')

    //check the number of rows
    cy.get('.rg-follow-list__item').its('length').should('eq', 40)
  });

  it('should remove followed items', () => {
    // spinner should be visible
    cy.get('.rg-follow-list__no-data-text').should('not.be.visible');
    cy.get('.rg-spinner-eclipse')
      .should('be', 'visible')


    for(let index = 40; index > 0; index--){
      cy.get('.rg-follow-list__item').its('length').should('eq', index);
      cy.get('.rg-follow-list__item').first().find('.rg-follow-button').click();
    }

    // check message when everything is removed
    cy.get('.rg-follow-list__no-data-text').should('be.visible');
  })
})

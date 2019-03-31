/// <reference types="Cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  })

  it('.type() - type into a DOM element', () => {
      cy.get('main div').should('have.text', 'Home Page');
  });
});

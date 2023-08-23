/// <reference types="cypress" />
describe('page', () => {
  it('works', () => {
    cy.visit('https://example.cypress.io')    
  });
  it('should return uppercase from custom command', () => {
    // @ts-ignore
    cy.customUpperCase('Cypress').should('equal', 'CYPRESS');
  });
})

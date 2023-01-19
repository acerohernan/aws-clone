/// <reference types="cypress" />

describe('Home page tests', () => {
  it('should be visible', () => {
    cy.visit('/');
  });

  it('should open modal', () => {
    cy.visit('/');
    cy.get('button').contains('Add widgets').click();
    cy.get('p')
      .contains(
        'Select widgets to add to your Console Home. They will be added to the bottom of your Console Home.'
      )
      .should('be.visible');
  });

  it('should close modal', () => {
    cy.visit('/');
    cy.get('button').contains('Add widgets').click();
    cy.get('button').contains('Cancel').click();
    cy.get('button').contains('Add widgets').should('be.visible');
  });
});

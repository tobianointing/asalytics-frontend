/// <reference types="cypress" />

Cypress.Commands.add("getByTestId", (id) => {
    cy.get(`[data-testid="${id}"]`);
});

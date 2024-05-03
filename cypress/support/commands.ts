/// <reference types="cypress" />

Cypress.Commands.add('getByTestId', (testId) => {
  return cy.get(`[data-testid=${testId}]`)
})

Cypress.on('uncaught:exception', (err) => {
  if (err.message.includes('Request failed with status code 400')) {
    return false
  }
})

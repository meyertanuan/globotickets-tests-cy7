/// <reference types="cypress" />

describe('Create Event', () => {
  it('should create a new event', () => {
    // navigate to the home page
    cy.visit('/');
    // go to the "Create Event" page
    cy.get('a[href="/create-event"]').click();
    // fill-in the form
    cy.get('#event-name').type('Happy Music Event');
    cy.get('#event-venue').type('Some Famous Place');
    cy.get('#event-date-month').select('11');
    cy.get('#event-date-day').select('5');
    cy.get('#event-date-year').select('2024');
    cy.get('#ticket-quantity').type('10');
    cy.get('textarea[name="event-notes"]').type('Don\'t miss out!');
    cy.get('input[name="event-image"]').check('./assets/event-2.jpg');
    // submit the form
    cy.get('button').contains('Create').click();
    // assert that a new event has been created
    cy.get('h2').should('have.text', 'Event Details');
  });
});
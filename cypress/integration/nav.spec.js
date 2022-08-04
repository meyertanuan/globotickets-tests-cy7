/// <reference types="cypress" />

describe('Navigation', () => {
    it('should have a list events link that navigates to the list events view', () => {
      // navigate to the homepage
      cy.visit('/');
      // check that the "List Events" link is there
      expect(cy.get('a[href="/list-events"]')).to.exist;
      // click on the "List Events" link
      cy.get('a[href="/list-events"]').click();
      // verify a user has been redirected to the "List Events" page
      expect(cy.get('h2').contains('Event List')).to.exist;
    });
  });
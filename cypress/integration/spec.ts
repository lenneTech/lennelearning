describe('Page Testing', () => {
  it('Visits the Home Page', () => {
    cy.visit('/');
    cy.contains('Willkommen');
  });
  it('Visits the job interested page', () => {
    cy.get('.learn-more').first().click();
    cy.contains('Du interessierst Dich für App- und Webentwicklung?');
  });
  it('Visits the intern page', () => {
    cy.visit('/');
    cy.get('.learn-more').eq(1).click();
    cy.contains('Du suchst noch ein Praktikum?');
  });
  it('Visits the company page', () => {
    cy.visit('/');
    cy.get('.learn-more').last().click();
    cy.contains('Du suchst fähige Entwickler für Dein Unternehmen?');
  });
  it('Navigate to Academy Pages from Home Page', () => {
    cy.visit('/');
    cy.get('.link').last().click();
  });
  it('Check all Tasks', () => {
    cy.get('.bi-check-circle').click({ multiple: true, force: true }).should('have.class', 'bi-check');
    cy.get('.bi-trophy-fill').click();
  });
  it('Go through Milestone', () => {
    cy.get('[data-test-id="milestone-next"]').click();
    cy.get('[data-test-id="milestone-next"]').click();
    cy.get('[data-test-id="milestone-next"]').click();
    cy.get('[data-test-id="milestone-next-section"]').click();
  });
  it('Check Questionlist and Dialog', () => {
    cy.get('.questionlist').first().click({ force: true }).should('have.class', 'question-done');
    cy.get('.bi-question-circle').first().click({ force: true });
    cy.get('[data-test-id="dialog-ok"]').click();
  });
  it('Check out', () => {
    cy.get('.bi-door-open').first().click({ force: true });
    cy.get('[data-test-id="dialog-confirm"]').click();
  });
});

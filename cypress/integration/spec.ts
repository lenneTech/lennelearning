describe('Page Testing', () => {
  it('Visits the home page', () => {
    cy.visit('/');
    cy.contains('Willkommen');
  });
  it('Visits the job interested page', () => {
    cy.visit('/berufsinteressierte');
    cy.contains('Du interessierst dich für App- und Webentwicklung?');
  });
  it('Visits the intern page', () => {
    cy.visit('/praktikanten');
    cy.contains('Du suchst noch ein Praktikum?');
  });
  it('Visits the company page', () => {
    cy.visit('/unternehmen');
    cy.contains('Du suchst fähige Entwickler für dein Unternehmen?');
  });
});

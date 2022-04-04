// describe('Accessibility of all main pages', () => {
//   it('Visits the Home Page', () => {
//     cy.visit('/');
//     cy.contains('Willkommen');
//   });
//   it('Visits the Job interested Page', () => {
//     cy.visit('/berufsinteressierte');
//     cy.contains('Du interessierst');
//   });
//   it('Visits the Intern Page', () => {
//     cy.visit('/praktikanten');
//     cy.contains('Du suchst');
//   });
//   it('Visits the Company Page', () => {
//     cy.visit('/unternehmen');
//     cy.contains('App- und Webentwicklung');
//   });
//   it('Visits the EntryPoints Page', () => {
//     cy.visit('/lernpfade');
//     cy.contains('Die Lernpfade');
//   });
//   it('Visits the Team Page', () => {
//     cy.visit('/team');
//     cy.contains('Das Team');
//   });
//   it('Visits the Subscription Page', () => {
//     cy.visit('/abonnements');
//     cy.contains('Abos und Aktionen');
//   });
//   it('Visits the Contact Page', () => {
//     cy.visit('/kontakt');
//     cy.contains('Kontakt');
//   });
// });

// describe('Navigation through main pages', () => {
//   it('Visits the Home Page', () => {
//     cy.visit('/');
//     cy.contains('Willkommen');
//   });
//   it('Navigate to Job interest Page', () => {
//     cy.get('#navbarDropdownMenuLink').click();
//     cy.get('.dropdown-item').first().click();
//     cy.contains('Du interessierst');
//   });
//   it('Navigate to Intern Page', () => {
//     cy.get('#navbarDropdownMenuLink').click();
//     cy.get('.dropdown-item').eq(1).click();
//     cy.contains('Du suchst');
//   });
//   it('Navigate to Company', () => {
//     cy.get('#navbarDropdownMenuLink').click();
//     cy.get('.dropdown-item').eq(2).click();
//     cy.contains('App- und Webentwicklung');
//   });
//   it('Navigate to EntryPoints Page', () => {
//     cy.get('.scroll-link').eq(0).click();
//     cy.contains('Die Lernpfade');
//   });
//   it('Navigate to Team Page', () => {
//     cy.get('.scroll-link').eq(1).click();
//     cy.contains('Das Team');
//   });
//   it('Navigate to Subscription Page', () => {
//     cy.get('.scroll-link').eq(2).click();
//     cy.contains('Abos und Aktionen');
//   });
//   it('Navigate to Contact Page', () => {
//     cy.get('.scroll-link').eq(3).click();
//     cy.contains('Kontakt');
//   });
// });

// describe('Page Testing', () => {
//   it('Visits the Home Page', () => {
//     cy.visit('/');
//     cy.contains('Willkommen');
//   });
//   it('Visits the job interested page', () => {
//     cy.get('.learn-more').first().click();
//     cy.contains('Du interessierst Dich für App- und Webentwicklung?');
//   });
//   it('Visits the intern page', () => {
//     cy.visit('/');
//     cy.get('.learn-more').eq(1).click();
//     cy.contains('Du suchst noch ein Praktikum?');
//   });
//   it('Visits the company page', () => {
//     cy.visit('/');
//     cy.get('.learn-more').last().click();
//     cy.contains('Du suchst fähige Entwickler für Dein Unternehmen?');
//   });
//   it('Navigate to Academy Pages from Home Page', () => {
//     cy.visit('/');
//     cy.get('.link').last().click();
//   });
//   it('Check all Tasks', () => {
//     cy.get('.bi-check-circle').click({ multiple: true, force: true }).should('have.class', 'bi-check');
//     cy.get('.bi-trophy-fill').click();
//   });
//   it('Go through Milestone', () => {
//     cy.get('[data-test-id="milestone-next"]').click();
//     cy.get('[data-test-id="milestone-next"]').click();
//     cy.get('[data-test-id="milestone-next"]').click();
//     cy.get('[data-test-id="milestone-next-section"]').click();
//   });
//   it('Check Questionlist and Dialog', () => {
//     cy.get('.questionlist').first().click({ force: true }).should('have.class', 'question-done');
//     cy.get('.bi-question-circle').first().click({ force: true });
//     cy.get('[data-test-id="dialog-ok"]').click();
//   });
//   it('Check out', () => {
//     cy.get('.bi-door-open').first().click({ force: true });
//     cy.get('[data-test-id="dialog-confirm"]').click();
//   });
// });

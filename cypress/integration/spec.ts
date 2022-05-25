describe('Testing accessibility of all main pages', () => {
  it('Visits the home page', () => {
    cy.visit('/');
    cy.contains('Willkommen');
  });
  it('Visits the job interested page', () => {
    cy.visit('/berufsinteressierte');
    cy.contains('Du interessierst');
  });
  it('Visits the intern page', () => {
    cy.visit('/praktikanten');
    cy.contains('Du suchst');
  });
  it('Visits the company page', () => {
    cy.visit('/unternehmen');
    cy.contains('App- und Webentwicklung');
  });
  it('Visits the entrypoints page', () => {
    cy.visit('/lernpfade');
    cy.contains('Die Lernpfade');
  });
  it('Visits the team page', () => {
    cy.visit('/team');
    cy.contains('Das Team');
  });
  it('Visits the subscription page', () => {
    cy.visit('/abonnements');
    cy.contains('Abos und Aktionen');
  });
  it('Visits the contact page', () => {
    cy.visit('/kontakt');
    cy.contains('Kontakt');
  });
  it('Visits the imprint page', () => {
    cy.visit('/impressum');
    cy.contains('Impressum');
  });
  it('Visits the privacy page', () => {
    cy.visit('/datenschutz');
    cy.contains('Datenschutzerklärung');
  });
});
describe('Testing navigation through header and footer', () => {
  it('Visits the Home page', () => {
    cy.visit('/');
    cy.contains('Willkommen');
  });
  it('Navigate to job interest page', () => {
    cy.viewport(1200, 1224);
    cy.get('[data-cy="dropdown-menu"]').click();
    cy.get('[data-cy="dropdown-item"]').first().click();
    cy.contains('Du interessierst');
  });
  it('Navigate to intern page', () => {
    cy.viewport(1200, 1224);
    cy.get('[data-cy="dropdown-menu"]').click();
    cy.get('[data-cy="dropdown-item"]').eq(1).click();
    cy.contains('Du suchst');
  });
  it('Navigate to company', () => {
    cy.viewport(1200, 1224);
    cy.get('[data-cy="dropdown-menu"]').click();
    cy.get('[data-cy="dropdown-item"]').eq(2).click();
    cy.contains('App- und Webentwicklung');
  });
  it('Navigate to entrypoints page', () => {
    cy.viewport(1200, 1224);
    cy.get('[data-cy="nav-item"]').eq(0).click();
    cy.contains('Die Lernpfade');
  });
  it('Navigate to workshops page', () => {
    cy.viewport(1200, 1224);
    cy.get('[data-cy="nav-item"]').eq(1).click();
    cy.contains('Workshops');
  });
  it('Navigate to team page', () => {
    cy.viewport(1200, 1224);
    cy.get('[data-cy="nav-item"]').eq(2).click();
    cy.contains('Das Team');
  });
  it('Navigate to subscription page', () => {
    cy.viewport(1200, 1224);
    cy.get('[data-cy="nav-item"]').eq(3).click();
    cy.contains('Abos und Aktionen');
  });
  it('Navigate to contact page', () => {
    cy.viewport(1200, 1224);
    cy.get('[data-cy="nav-item"]').eq(4).click();
    cy.contains('Kontakt');
  });
  it('Navigate to imprint page', () => {
    cy.viewport(1200, 1224);
    cy.get('[data-cy="imprint-btn"]').click();
    cy.contains('Impressum');
  });
  it('Navigate to privacy page', () => {
    cy.viewport(1200, 1224);
    cy.get('[data-cy="privacy-btn"]').click();
    cy.contains('Datenschutzerklärung');
  });
});
describe('Testing all buttons on main page', () => {
  it('Visits the home page', () => {
    cy.visit('/');
    cy.contains('Willkommen');
  });
  it('Navigate to entrypoints page', () => {
    cy.get('[data-cy="entry-point-btn"]').click({ force: true });
    cy.contains('Die Lernpfade');
  });
  it('Navigate back and then to job interests page', () => {
    cy.visit('/');
    cy.get('[data-cy="info-card"]').eq(1).click();
    cy.contains('Du suchst');
  });
  it('Navigate back and then to intern page', () => {
    cy.visit('/');
    cy.get('[data-cy="info-card"]').eq(1).click();
    cy.contains('Du suchst');
  });
  it('Navigate back and then to company', () => {
    cy.visit('/');
    cy.get('[data-cy="info-card"]').eq(2).click();
    cy.contains('App- und Webentwicklung');
  });
  it('Navigate back and then to contact page', () => {
    cy.visit('/');
    cy.get('[data-cy="contact-btn"]').click();
    cy.contains('Kontakt');
  });
});
describe('Testing all buttons on job interest page', () => {
  it('Visit job Interest page', () => {
    cy.visit('/berufsinteressierte');
    cy.contains('Du interessierst');
  });
  it('Navigate to entrypoints page', () => {
    cy.get('[data-cy="entry-point-btn"]').click({ force: true });
    cy.contains('Die Lernpfade');
  });
  it('Navigate back and then to contact page', () => {
    cy.visit('/berufsinteressierte');
    cy.get('[data-cy="contact-btn"]').click();
    cy.contains('Kontakt');
  });
});
describe('Testing all buttons on intern page', () => {
  it('Visit job Interest page', () => {
    cy.visit('/praktikanten');
    cy.contains('Du suchst');
  });
  it('Navigate to entrypoints page', () => {
    cy.get('[data-cy="entry-point-btn"]').click({ force: true });
    cy.contains('Die Lernpfade');
  });
  it('Navigate back and then to contact page', () => {
    cy.visit('/praktikanten');
    cy.get('[data-cy="contact-btn"]').click({ force: true });
    cy.contains('Kontakt');
  });
  it('Navigate back and test the slider', () => {
    cy.visit('/praktikanten');
    cy.contains('Daniel König').should('not.be.visible');
    cy.get('.swiper-button-next').click({ force: true });
    cy.get('.swiper-button-next').click({ force: true });
    cy.get('.swiper-button-prev').click({ force: true });
    cy.contains('Daniel König').should('be.visible');
  });
});
describe('Testing all buttons on entrypoints page', () => {
  it('Visit entrypoints page', () => {
    cy.visit('/lernpfade');
    cy.contains('Die Lernpfade');
  });
  it('Select job Interest', () => {
    cy.get('[data-cy="entry-point-select"]').eq(1).click({ force: true });
    cy.get('[data-cy="entry-point-card"]').eq(0).contains('Berufsfelderkundung');
  });
  it('Select intern', () => {
    cy.get('[data-cy="entry-point-select"]').eq(2).click({ force: true });
    cy.get('[data-cy="entry-point-card"]').eq(1).contains('Praktikum');
  });
  it('Select company', () => {
    cy.get('[data-cy="entry-point-select"]').eq(3).click({ force: true });
    cy.get('[data-cy="entry-point-card"]').eq(0).contains('Unternehmen');
  });
  it('Select all', () => {
    cy.get('[data-cy="entry-point-select"]').eq(0).click({ force: true });
    cy.get('[data-cy="entry-point-card"]').eq(2).contains('Unternehmen');
  });
});

describe('Testing all buttons on workshop page', () => {
  it('Visit Workshops page', () => {
    cy.visit('/workshops');
    cy.contains('Auf der Suche');
  });
  it('Checks contact button in Header', () => {
    cy.get('[data-cy="contact-btn"]').eq(0).click({ force: true });
    cy.contains('Du hast eine Frage');
  });
  it('Navigate back and open inquiry modal', () => {
    cy.visit('/workshops');
    cy.get('[data-cy="inquiry-btn"]').eq(0).click({ force: true });
    cy.contains('Schick uns');
    cy.get('[data-cy="send-mail-btn"]').eq(0).click({ force: true });
    cy.contains('Dieses Feld ist ein Pflichtfeld');
    cy.get('[data-cy="dialog-close"]').eq(0).click({ force: true });
    cy.contains('Schick uns').should('not.exist');
  });
});

describe('Testing all buttons on team page', () => {
  it('Visit Team page and check if the first accordion is already open and the others closed', () => {
    cy.visit('/team');
    cy.contains('Das Team');
    cy.contains('Dr. Inga Haase').should('be.visible');
    cy.contains('Robin Zeppenfeld').should('not.be.visible');
    cy.contains('Florian Steinhanses').should('not.be.visible');
    cy.contains('Pascal Klesse').should('not.be.visible');
  });
  it('Checks if all accordions can be opened and the first one does not close', () => {
    cy.get('[data-cy="accordion-item"]').eq(1).click();
    cy.get('[data-cy="accordion-item"]').eq(2).click();
    cy.get('[data-cy="accordion-item"]').eq(3).click();
    cy.contains('Dr. Inga Haase').should('be.visible');
    cy.contains('Robin Zeppenfeld').should('be.visible');
    cy.contains('Florian Steinhanses').should('be.visible');
    cy.contains('Pascal Klesse').should('be.visible');
  });
});
describe('Testing all buttons on subscription page', () => {
  it('Visit entrypoints page', () => {
    cy.visit('/abonnements');
    cy.contains('Abos und Aktionen');
  });
  it('Navigate to contact page', () => {
    cy.get('[data-cy="contact-btn"]').eq(0).click({ force: true });
    cy.contains('Kontakt');
    cy.visit('/abonnements');
    cy.get('[data-cy="contact-btn"]').eq(1).click({ force: true });
    cy.contains('Kontakt');
  });
  it('Navigate back change selection', () => {
    cy.visit('/abonnements');
    cy.get('[data-cy="subscription-select"]').eq(1).click({ force: true });
    cy.contains('Azubi');
    cy.get('[data-cy="subscription-select"]').eq(0).click({ force: true });
    cy.contains('Free');
  });
  it('Select price card', () => {
    cy.get('[data-cy="price-card-btn"]').eq(1).click({ force: true });
    cy.contains('Schick uns');
    cy.get('[data-cy="send-mail-btn"]').eq(0).click({ force: true });
    cy.contains('Dieses Feld ist ein Pflichtfeld');
  });
});
describe('Testing all buttons on contact page', () => {
  it('Visit entrypoints page', () => {
    cy.visit('/kontakt');
    cy.contains('Kontakt');
  });
  it('Navigate to contact page', () => {
    cy.get('[data-cy="send-mail-btn"]').eq(0).click({ force: true });
    cy.contains('Dieses Feld ist ein Pflichtfeld');
  });
});
describe('Testing entrypoint standard', () => {
  it('Visit entrypoints page', () => {
    cy.visit('/lernpfade');
    cy.contains('Die Lernpfade');
  });
  it('Start Entry-Point Standard', () => {
    cy.get('[data-cy="entry-point-card"]').last().click({ force: true });
    cy.contains('Der Beruf');
  });
  it('Go to next section via bottom navigation', () => {
    cy.get('[data-cy="nav-btn-next"]').click();
    cy.contains('Wie ist ein HTML');
  });
  it('Test icon-functionality', () => {
    cy.get('[data-cy="task-share-icon"]').eq(0).click({ force: true });
    cy.contains('Link zu diesem Abschnitt kopiert!').should('be.visible');
    cy.get('[data-cy="task-help-icon"]').eq(0).click({ force: true });
    cy.contains('Bevor Du Dich bei Deinem Tutor meldest, versuche das Problem erst einmal selbst zu lösen.');
    cy.get('[data-cy="dialog-close"]').click();
    cy.get('[data-cy="task-solution-icon"]').eq(0).click({ force: true });
    cy.contains('Für den Fall, dass Du nicht mehr weiterkommst oder');
    cy.get('[data-cy="dialog-accept"]').click();
    cy.contains('Schaue Dir diese Videoabschnitte an und komme danach wieder hier her.').should('be.visible');
    cy.get('[data-cy="task-complete-icon"]').eq(0).click({ force: true });
    cy.contains('Schaue Dir diese Videoabschnitte an und komme danach wieder hier her.').should('not.be.visible');
  });
  it('Check one question from questionlist', () => {
    cy.get('.questionlist')
      .first()
      .should('not.have.css', 'text-decoration', 'line-through solid rgb(60, 216, 94)')
      .click({ force: true })
      .should('have.css', 'text-decoration', 'line-through solid rgb(60, 216, 94)');
  });
  it('Go to prev section via bottom navigation', () => {
    cy.get('[data-cy="nav-btn-prev"]').click();
    cy.contains('Der Beruf');
  });
  it('Complete all tasks in job', () => {
    cy.get('[data-cy="task-complete-icon"]').click({ multiple: true, force: true }).should('have.class', 'bi-check');
  });
  it('Open milestone', () => {
    cy.get('[data-cy="milestone-btn"]').click();
    cy.contains('Herzlichen Glückwunsch');
  });
  it('Go through milestone', () => {
    cy.get('[data-cy="milestone-next"]').click();
    cy.contains('Was kannst Du jetzt schon?');
    cy.get('[data-cy="milestone-prev"]').click();
    cy.contains('Herzlichen Glückwunsch');
    cy.get('[data-cy="milestone-next"]').click();
    cy.contains('Was kannst Du jetzt schon?');
    cy.get('[data-cy="milestone-next"]').click();
    cy.contains('Du hast den Alltag von Softwareentwicklern');
    cy.get('[data-cy="milestone-next"]').click();
    cy.contains('Du hast gelernt, wie man ein Softwareentwickler wird,');
    cy.get('[data-cy="milestone-next"]').click();
    cy.contains('Du hast die Softwareentwicklung im App und Web');
    cy.get('[data-cy="milestone-next-section"]').click();
    cy.contains('Wie ist ein HTML');
  });
  it('Checkout entry point', () => {
    cy.get('[data-cy="reset-entrypoint"]').click();
    cy.get('[data-cy="dialog-confirm"]').click();
    cy.contains('Die Lernpfade');
  });
});

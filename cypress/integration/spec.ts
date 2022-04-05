describe('Accessibility of all main pages', () => {
  it('Visits the Home Page', () => {
    cy.visit('/');
    cy.contains('Willkommen');
  });
  it('Visits the Job interested Page', () => {
    cy.visit('/berufsinteressierte');
    cy.contains('Du interessierst');
  });
  it('Visits the Intern Page', () => {
    cy.visit('/praktikanten');
    cy.contains('Du suchst');
  });
  it('Visits the Company Page', () => {
    cy.visit('/unternehmen');
    cy.contains('App- und Webentwicklung');
  });
  it('Visits the EntryPoints Page', () => {
    cy.visit('/lernpfade');
    cy.contains('Die Lernpfade');
  });
  it('Visits the Team Page', () => {
    cy.visit('/team');
    cy.contains('Das Team');
  });
  it('Visits the Subscription Page', () => {
    cy.visit('/abonnements');
    cy.contains('Abos und Aktionen');
  });
  it('Visits the Contact Page', () => {
    cy.visit('/kontakt');
    cy.contains('Kontakt');
  });
  it('Visits the Imprint Page', () => {
    cy.visit('/impressum');
    cy.contains('Impressum');
  });
  it('Visits the Privacy Page', () => {
    cy.visit('/datenschutz');
    cy.contains('Datenschutzerklärung');
  });
});

describe('Navigation through main pages', () => {
  it('Visits the Home Page', () => {
    cy.visit('/');
    cy.contains('Willkommen');
  });
  it('Navigate to Job interest Page', () => {
    cy.get('[data-cy="dropdown-menu"]').click();
    cy.get('[data-cy="dropdown-item"]').first().click();
    cy.contains('Du interessierst');
  });
  it('Navigate to Intern Page', () => {
    cy.get('[data-cy="dropdown-menu"]').click();
    cy.get('[data-cy="dropdown-item"]').eq(1).click();
    cy.contains('Du suchst');
  });
  it('Navigate to Company', () => {
    cy.get('[data-cy="dropdown-menu"]').click();
    cy.get('[data-cy="dropdown-item"]').eq(2).click();
    cy.contains('App- und Webentwicklung');
  });
  it('Navigate to EntryPoints Page', () => {
    cy.get('[data-cy="nav-item"]').eq(0).click();
    cy.contains('Die Lernpfade');
  });
  it('Navigate to Team Page', () => {
    cy.get('[data-cy="nav-item"]').eq(1).click();
    cy.contains('Das Team');
  });
  it('Navigate to Subscription Page', () => {
    cy.get('[data-cy="nav-item"]').eq(2).click();
    cy.contains('Abos und Aktionen');
  });
  it('Navigate to Contact Page', () => {
    cy.get('[data-cy="nav-item"]').eq(3).click();
    cy.contains('Kontakt');
  });
  it('Navigate to Imprint Page', () => {
    cy.get('[data-cy="imprint-btn"]').click();
    cy.contains('Impressum');
  });
  it('Navigate to Privacy Page', () => {
    cy.get('[data-cy="privacy-btn"]').click();
    cy.contains('Datenschutzerklärung');
  });
});

describe('Testing all Buttons on Main Page', () => {
  it('Visits the Home Page', () => {
    cy.visit('/');
    cy.contains('Willkommen');
  });
  it('Navigate to EntryPoints Page', () => {
    cy.get('[data-cy="entry-point-btn"]').click({ force: true });
    cy.contains('Die Lernpfade');
  });
  it('Navigate back and then to Job Interests Page', () => {
    cy.visit('/');
    cy.get('[data-cy="info-card"]').eq(1).click();
    cy.contains('Du suchst');
  });
  it('Navigate back and then to Intern Page', () => {
    cy.visit('/');
    cy.get('[data-cy="info-card"]').eq(1).click();
    cy.contains('Du suchst');
  });
  it('Navigate back and then to Company', () => {
    cy.visit('/');
    cy.get('[data-cy="info-card"]').eq(2).click();
    cy.contains('App- und Webentwicklung');
  });
  it('Navigate back and then to Contact Page', () => {
    cy.visit('/');
    cy.get('[data-cy="contact-btn"]').click();
    cy.contains('Kontakt');
  });
});

describe('Testing all Buttons on Job Interest Page', () => {
  it('Visit Job Interest Page', () => {
    cy.visit('/berufsinteressierte');
    cy.contains('Du interessierst');
  });
  it('Navigate to EntryPoints Page', () => {
    cy.get('[data-cy="entry-point-btn"]').click({ force: true });
    cy.contains('Die Lernpfade');
  });
  it('Navigate back and then to Contact Page', () => {
    cy.visit('/berufsinteressierte');
    cy.get('[data-cy="contact-btn"]').click();
    cy.contains('Kontakt');
  });
});

describe('Testing all Buttons on Intern Page', () => {
  it('Visit Job Interest Page', () => {
    cy.visit('/praktikanten');
    cy.contains('Du suchst');
  });
  it('Navigate to EntryPoints Page', () => {
    cy.get('[data-cy="entry-point-btn"]').click({ force: true });
    cy.contains('Die Lernpfade');
  });
  it('Navigate back and then to Contact Page', () => {
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

describe('Testing all Buttons on EntryPoints Page', () => {
  it('Visit EntryPoints Page', () => {
    cy.visit('/lernpfade');
    cy.contains('Die Lernpfade');
  });
  it('Select Job Interest', () => {
    cy.get('[data-cy="entry-point-select"]').eq(1).click({ force: true });
    cy.get('[data-cy="entry-point-card"]').eq(0).contains('Berufsfelderkundung');
  });
  it('Select Intern', () => {
    cy.get('[data-cy="entry-point-select"]').eq(2).click({ force: true });
    cy.get('[data-cy="entry-point-card"]').eq(1).contains('Praktikum');
  });
  it('Select Company', () => {
    cy.get('[data-cy="entry-point-select"]').eq(3).click({ force: true });
    cy.get('[data-cy="entry-point-card"]').eq(0).contains('Unternehmen');
  });
  it('Select All', () => {
    cy.get('[data-cy="entry-point-select"]').eq(0).click({ force: true });
    cy.get('[data-cy="entry-point-card"]').eq(2).contains('Unternehmen');
  });
});

describe('Testing all Buttons on Team Page', () => {
  it('Visit EntryPoints Page and check if the first accordion is already open and the others closed', () => {
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

describe('Testing all Buttons on Subscription Page', () => {
  it('Visit EntryPoints Page', () => {
    cy.visit('/abonnements');
    cy.contains('Abos und Aktionen');
  });
  it('Navigate to Contact Page', () => {
    cy.get('[data-cy="contact-btn"]').eq(0).click({ force: true });
    cy.contains('Kontakt');
    cy.visit('/abonnements');
    cy.get('[data-cy="contact-btn"]').eq(1).click({ force: true });
    cy.contains('Kontakt');
  });
  it('Navigate Back Change Selection', () => {
    cy.visit('/abonnements');
    cy.get('[data-cy="subscription-select"]').eq(1).click({ force: true });
    cy.contains('Azubi');
    cy.get('[data-cy="subscription-select"]').eq(0).click({ force: true });
    cy.contains('Free');
  });
  it('Select Price Card', () => {
    cy.get('[data-cy="price-card-btn"]').eq(1).click({ force: true });
    cy.contains('Schick uns');
    cy.get('[data-cy="send-mail-btn"]').eq(0).click({ force: true });
    cy.contains('Dieses Feld ist ein Pflichtfeld');
  });
});

describe('Testing all Buttons on Contact Page', () => {
  it('Visit EntryPoints Page', () => {
    cy.visit('/kontakt');
    cy.contains('Kontakt');
  });
  it('Navigate to Contact Page', () => {
    cy.get('[data-cy="send-mail-btn"]').eq(0).click({ force: true });
    cy.contains('Dieses Feld ist ein Pflichtfeld');
  });
});

describe('Testing Entry-Point Standard', () => {
  it('Visit EntryPoints Page', () => {
    cy.visit('/lernpfade');
    cy.contains('Die Lernpfade');
  });
  it('Start Entry-Point Standard', () => {
    cy.get('[data-cy="entry-point-card"]').last().click({ force: true });
    cy.contains('Der Beruf');
  });
  it('Go to next Section via bottom navigation', () => {
    cy.get('[data-cy="nav-btn-next"]').click();
    cy.contains('Wie ist ein HTML');
  });
  it('Test Icon-functionality', () => {
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
  it('Check one Question from Questionlist', () => {
    cy.get('.questionlist')
      .first()
      .should('not.have.css', 'text-decoration', 'line-through solid rgb(60, 216, 94)')
      .click({ force: true })
      .should('have.css', 'text-decoration', 'line-through solid rgb(60, 216, 94)');
  });
  it('Go to prev Section via bottom navigation', () => {
    cy.get('[data-cy="nav-btn-prev"]').click();
    cy.contains('Der Beruf');
  });
  it('Complete all Tasks in Job', () => {
    cy.get('[data-cy="task-complete-icon"]').click({ multiple: true, force: true }).should('have.class', 'bi-check');
  });
  it('Open Milestone', () => {
    cy.get('[data-cy="milestone-btn"]').click();
    cy.contains('Herzlichen Glückwunsch');
  });
  it('Go through Milestone', () => {
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
  it('Checkout Entry Point', () => {
    cy.get('[data-cy="reset-entrypoint"]').click();
    cy.get('[data-cy="dialog-confirm"]').click();
    cy.contains('Die Lernpfade');
  });
});

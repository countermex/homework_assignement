describe('HomePage', () => {
  beforeEach(() => {
    cy.visit('localhost:3000');
  });

  it('should display header elements', () => {
    cy.get('header').within(() => {
      cy.get('input[type="checkbox"]').should('exist');
      cy.get('span').contains('None Selected').should('exist');
      cy.get('button').should('be.disabled');
    });
  });

  it('should allow selecting and deselecting all items', () => {
    cy.get('._header_ek8z3_1 > input').check();
    cy.get('#netsh\\.exe').should('be.checked');
    cy.get('#uxtheme\\.dll').should('be.checked');

    cy.get('._header_ek8z3_1 > input').uncheck();
    cy.get('#netsh\\.exe').should('not.be.checked');
    cy.get('#uxtheme\\.dll').should('not.be.checked');
  });

  it('should update the header information and button state when items are selected', () => {
    cy.get('header input[type="checkbox"]').check();
    cy.get('header span').contains(/Selected \d+/);
    cy.get('header button').should('not.be.disabled');
  });

  it('should display an alert with selected data when the download button is clicked', () => {
    cy.get('header input[type="checkbox"]').check();
    cy.get('header button').click();
    cy.on('window:alert', (text) => {
      expect(text[0]).to.contain('Device:');
      expect(text[0]).to.contain('Device:');
    });
  });

  it('should allow individual row selection', () => {
    cy.get('#netsh\\.exe').check();
    cy.get('header span').contains('Selected 1');
  });
});
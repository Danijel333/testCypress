/// < reference types="Cypress"/>
const Locators = require('../fixtures/Locators.json');

describe('Login with locators', () => {

    beforeEach('Visit login page', () => {
        cy.visit('/login');
    })
    
    it('Login with valid data', () => {
        cy.get(Locators.Login.emailInput).type('dani@gmail.com');
        cy.get(Locators.Login.passwordInput).type('ovojesifra33');
        cy.get(Locators.Login.submitBtn).click();
        cy.url().should('not.include', '/login');

    })

    it('logout', () => {
        cy.get(Locators.Logout.logOutBtn).should('have.length', 3);
        cy.get(Locators.Logout.logOutBtn).eq(2).click();
    })
    
})

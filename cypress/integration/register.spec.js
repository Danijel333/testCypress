/// <reference types="Cypress" />

describe('registe test', () => {

    it('register without first name', () => {
        cy.visit('/register');
        cy.url().should('include','/register');
        cy.get('#last-name').type('Janjic');
        cy.get('#email').type('dani4444@gmail.com');
        cy.get('#password').type('ovojesifra33');
        cy.get('#password-confirmation').type('ovojesifra33');
        cy.get(":checkbox").check()
        cy.get('button[type="submit"]').click();
        cy.url().should('not.include','/register');
    })

    it('register without last name', () => {
        cy.visit('/register');
        cy.url().should('include','/register');
        cy.get('#first-name').type('Danijel');
        cy.get('#email').type('nekimejl1444@gmail.com');
        cy.get('#password').type('ovojesifra33');
        cy.get('#password-confirmation').type('ovojesifra33');
        cy.get(':checkbox').check();
        cy.get('button').click();
        cy.url().should('not.include','/register');
    })

    it('register without email', () => {
        cy.visit('/register');
        
    })

    it('register with valid credentials', () => {
        cy.visit('/register');
        cy.url().should('include','/register');
        cy.get('#first-name').type('Danijel');
        cy.get('#last-name').type('Janjic');
        cy.get('#email').type('danijel3335@gmail.com');
        cy.get('#password').type('ovojesifra33');
        cy.get('#password-confirmation').type('ovojesifra33');
        cy.get('[type="checkbox"]').check()
        cy.get('button[type="submit"]').click();
        cy.url().should('not.have','/register');
    })
})
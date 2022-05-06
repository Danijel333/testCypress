import {
    loginPage
} from "../page_object/loginPage.js";

describe('login POM', () => {

    it('login with invalid data', () => {
        cy.intercept({
            method: 'POST',
            url: 'https://gallery-api.vivifyideas.com/api/auth/login'
        }).as('unsuccessfulLogin');

        cy.visit('/login');
        cy.url().should('contains', '/login');
        loginPage.loginHeading.should('have.text', 'Please login');
        loginPage.login('dani@gmail.com', 'ovojesifra3');
        cy.wait('@unsuccessfulLogin').then(interception => {
            expect(interception.response.statusCode).eq(401)
            expect(interception.response.statusMessage).eq('Unauthorized')
        })
        loginPage.errorMsg.should('be.visible')
            .and('have.text', 'Bad Credentials')
            .and('have.css', 'background-color', 'rgb(248, 215, 218)')
        cy.url().should('include', '/login');
    })

    it('login with valid data', () => {
        cy.intercept({
            method: 'POST',
            url: 'https://gallery-api.vivifyideas.com/api/auth/login'
        }).as('unsuccessfulLogin');

        cy.visit('/login');
        cy.url().should('contains', '/login');
        loginPage.loginHeading.should('have.text', 'Please login');
        loginPage.login('dani@gmail.com', 'ovojesifra33');
        cy.wait('@unsuccessfulLogin').then(interception => {
            expect(interception.response.statusCode).eq(200)
            expect(interception.response.body.user_id).eq(775)
        })
        cy.url().should('include', '/login');
    })

    it('logout', () => {
        cy.intercept({
            method: 'POST',
            url: 'https://gallery-api.vivifyideas.com/api/auth/logout'
        }).as('successfulLogout');
        
        cy.get('a[class="nav-link nav-buttons"]').should('have.length', 3);
        cy.get('a[class="nav-link nav-buttons"]').eq(2).click();
        cy.wait('@successfulLogout').then(interception => {
            expect(interception.response.statusCode).eq(200);
            expect(interception.response.statusMessage).eq('OK');
        })
    })

})
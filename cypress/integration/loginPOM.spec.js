import { loginPage } from "../page_object/loginPage.js";

describe ('login POM', () => {

    it('login with valid data', () => {
        cy.visit('/login');
        // loginPage.emailInput.type('dani@gmail.com');
        // loginPage.passwordInput.type('ovojesifra33');
        // loginPage.submitBtn.click();

        loginPage.login('dani@gmail.com','ovojesifra33')

    })

})
class RegisterPage {

    get firstName() {
        return cy.get('#first-name')
    }

    get lastName() {
        return cy.get('#last-name')
    }

    get email() {
        return cy.get('#email')
    }

    get password(){
        return cy.get('#password')
    }

    get passwordCon(){
        return cy.get('#password-confirmation')
    }

    get checkboxMark() {
        return cy.get(':checkbox')
    }

    get submitBtn() {
        return cy.get('button[type="submit"]')
    }

    register(name, lastName, email, password) {
        this.firstName.type(name);
        this.lastName.type(lastName);
        this.email.type(email);
        this.password.type(password);
        this.passwordCon.type(password);
        this.checkboxMark.check();
        this.submitBtn.click();
    }

}

export const registerPage = new RegisterPage();
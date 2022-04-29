/// <reference types="Cypress" />
const Locators = require('../fixtures/Locators.json');
import { faker } from '@faker-js/faker';

describe('Register with locators', () => {
    let registerData = {
        randomName: '',
        randomLastName: '',
        randomEmail: '',
        randomPass: ''
    }

    beforeEach(() => {
        registerData.randomName = faker.name.firstName();
        registerData.randomLastName = faker.name.lastName();
        registerData.randomEmail = faker.internet.email();
        registerData.randomPass = faker.internet.password();
    })

    it('register with valid credentials', () => {
        cy.visit('/register');
        cy.url().should('include','/register');
        cy.get(Locators.Register.firstName).type(registerData.randomName);
        cy.get(Locators.Register.lastName).type(registerData.randomLastName);
        cy.get(Locators.Register.emailAddress).type(registerData.randomEmail);
        cy.get(Locators.Register.password).type(registerData.randomPass);
        cy.get(Locators.Register.passwordConfirm).type(registerData.randomPass);
        cy.get(Locators.Register.markCheckbox).check()
        cy.get(Locators.Register.submitBtn).click();
        cy.url().should('not.have','/register');
    })

    it('register with empty name', () => {
        cy.visit('/register');
        cy.url().should('include','/register');
        cy.get(Locators.Register.lastName).type(registerData.randomLastName);
        cy.get(Locators.Register.emailAddress).type(registerData.randomEmail);
        cy.get(Locators.Register.password).type(registerData.randomPass);
        cy.get(Locators.Register.passwordConfirm).type(registerData.randomPass);
        cy.get(Locators.Register.markCheckbox).check()
        cy.get(Locators.Register.submitBtn).click();
        cy.url().should('include','/register');
    })

    it('register with empty last name', () => {
        cy.visit('/register');
        cy.url().should('include','/register');
        cy.get(Locators.Register.firstName).type(registerData.randomName);        
        cy.get(Locators.Register.emailAddress).type(registerData.randomEmail);
        cy.get(Locators.Register.password).type(registerData.randomPass);
        cy.get(Locators.Register.passwordConfirm).type(registerData.randomPass);
        cy.get(Locators.Register.markCheckbox).check()
        cy.get(Locators.Register.submitBtn).click();
        cy.url().should('include','/register');
    })

    it('register with missing email', () => {
        cy.visit('/register');
        cy.url().should('include','/register');
        cy.get(Locators.Register.firstName).type(registerData.randomName);
        cy.get(Locators.Register.lastName).type(registerData.randomLastName);        
        cy.get(Locators.Register.password).type(registerData.randomPass);
        cy.get(Locators.Register.passwordConfirm).type(registerData.randomPass);
        cy.get(Locators.Register.markCheckbox).check()
        cy.get(Locators.Register.submitBtn).click();
        cy.url().should('include','/register');
    })
})
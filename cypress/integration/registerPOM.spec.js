import {
    registerPage
} from "../page_object/registerPage.js";
import {
    faker
} from '@faker-js/faker';

describe('register POM', () => {

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
        registerData.randomPass = faker.internet.password(20, true, /[A-Z]/, '888');
    })

    before('visit register page', () => {
        cy.visit('/register');
    })

    it('negative case / invalid email', () => {
        cy.url().should('contain', '/register');
        registerPage.registerHeading.should('have.text','Register')
        registerPage.register(
            registerData.randomName,
            registerData.randomLastName,
            'dan@gmail',
            registerData.randomPass
        )
        registerPage.errMessage.should('be.visible')
            .and('have.text', 'The email must be a valid email address.')
            .and('have.css','background-color','rgb(248, 215, 218)');
        registerPage.checkboxMark.should('be.checked');
    })

    xit('register with valid data', () => {
        cy.url().should('contain', '/register')
        registerPage.register(
            registerData.randomName,
            registerData.randomLastName,
            registerData.randomEmail,
            registerData.randomPass
        )


    })

})
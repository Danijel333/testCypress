import { registerPage } from "../page_object/registerPage.js";
import { faker } from '@faker-js/faker';

describe ('register POM', () => {

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
            registerData.randomPass = faker.internet.password(20,true,/[A-Z]/,'888');
        })

        before('visit register page', () => {
            cy.visit('/register');
        })

    it('register with valid data', () => {     
        registerPage.register(
            registerData.randomName,
            registerData.randomLastName,
            registerData.randomEmail, 
            registerData.randomPass
            )
        

    })

})
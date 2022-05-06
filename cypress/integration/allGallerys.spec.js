/// <reference types="Cypress" />

import {
    allGalleries
} from '../page_object/allGalleries.js';


describe('all galleries test', () => {

    beforeEach('visit all galeries page', () => {
        cy.loginViaBeckend()
    })

    it.only('visit', () => {
        cy.visit('/create')
    })

    it('validate page', () => {
        allGalleries.allGalleryHeading
            .should('be.visible')
            .and('have.text', 'All Galleries');
    })

    it('all galleries dispaly correctly', () => {
        allGalleries.singleGallery
            .should('be.visible')
            .and('have.length', 10)
    })

    it('10 more galleries loading', () => {
        allGalleries.singleGallery.should('have.length', 10);
        allGalleries.loadMore.click();
        allGalleries.singleGallery.should('have.length', 20);
        allGalleries.loadMore.click();
        allGalleries.singleGallery.should('have.length', 30);
        allGalleries.loadMore.click();
        allGalleries.singleGallery.should('have.length', 40);
    })

    it('redirect to single gallery page', () => {
        allGalleries.singleGallery
            .first()
            .find('a')
            .first()
            .click();
            cy.url().should('include','/galleries')
    })

    it('redirect to authors gallery page', () => {
        allGalleries.singleGallery
            .first()
            .find('a')
            .last()
            .click();
            cy.url().should('include','/authors')
    })

    it('search returning correct result', () => {
        let searchTerm ='Product Security Architect';

        allGalleries.singleGallery.should('have.length', 10)
        allGalleries.search(searchTerm);
        allGalleries.singleGallery.should('have.length',1);
        allGalleries.singleGallery
            .find('a')
            .first()
            .should('have.text', searchTerm)
    })
})

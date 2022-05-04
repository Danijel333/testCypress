class AllGalleries {
    get allGalleryHeading() {
        return cy.get('h1');
    }

    get input() {
        return cy.get('input');
    }

    get filterBtn() {
        return cy.get('.btn').first();
    }

    get singleGallery() {
        return cy.get('.cell')
    }

    get loadMore() {
        return cy.get('.btn').last();
    }

    search(searchTerm) {
        this.input.type(searchTerm);
        this.filterBtn.click();
    }
}

export const allGalleries = new AllGalleries();
class CreateGallery {

    get titleInput() {
        return cy.get('#title');
    }

    get descriptionInput() {
        return cy.get('#description');
    }

    get imageUrlInput() {
        return cy.get('.input-group')
    }

    get addImageBtn() {
        return cy.get(':button')
    }

    get submitBtn() {
        return cy.get('button').first();
    }

    createGallery(title, description, image){
        this.titleInput.type(title);
        this.descriptionInput = type(description);
        this.imageUrlInput = type(image);

    }
}

export const createGallery = new CreateGallery();
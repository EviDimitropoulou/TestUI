class SearchLocator {
    elements = {
        getChooseCitytxtBox: () => cy.get('[data-test-id="city-selector-input"]'),
        getSeeBikesBtn: () => cy.get('[data-test-id="city-selector-submit"]'),
        getChangeBtn: () => cy.get('[data-test-id="open-city-selector-button"]'),
        getPopUpWindow: () => cy.get('[data-test-id="dialog-close"]'),
        getAllRadioBtn: () => cy.get('[data-test-id="radio-button"]'),
        getEbikesRadioBtn: () => cy.get('[data-test-id="radio-button"]'),
        getCityBikesRadioBtn: () => cy.get('[data-test-id="radio-button"]'),
        getMoreDetailsLink: () => cy.get('[data-test-id="product-more-details-link"]'),
        getSideMenuBth: () => cy.get('[data-test-id="sidemenu-hamburger"]'),
        getProductList: () => cy.get('[data-test-id="city-product-list"]'),
        getProductItem: () => cy.get('[data-test-id="city-product-list-item"]'),
        getCloseSideMenu: () => cy.get('[data-test-id="sidemenu-close"]'),
        getCountry: () => cy.get('[data-test-id="countryButton"]'),
        getLanguage: () => cy.get('[data-test-id="languageButton"]'),
        getAllBikes: () => cy.get('.ProductList_list__E25Va li'),
        getCountryTxt: () => cy.get('.Dropdown_container__zjHrJ'),
    }

    visitSwapfietsUKpage() {
        cy.visit('https://swapfiets.com/en-GB')
    }

    checkChooseCitytxtBox() {
        this.elements.getChooseCitytxtBox().should('exist');
    }
    typeChooseCitytxtBox(city) {
        this.elements.getChooseCitytxtBox().type(city);
        cy.wait(1000);
    }
    checkSeeBikesbtn(text) {
        this.elements.getSeeBikesBtn().should('contain', text);
    }
    clickSeeBikesBtn() {
        this.elements.getSeeBikesBtn().click({ force: true });
    }
    checkAllRadioBtn() {
        this.elements.getAllRadioBtn()
            .should('be.visible')
            .should('contain', 'All')
            .should('have.css', 'background-color', 'rgb(0, 169, 224)');
    }
    checkEbikeRadioBtn() {
        this.elements.getAllRadioBtn()
            .should('be.visible')
            .should('contain', 'E-bikes');

    }
    checkCitybikeRadioBtn() {
        this.elements.getAllRadioBtn()
            .should('be.visible')
            .should('contain', 'City bikes');
    }

    checkMoreDetailsLink(name) {
        cy.wait(500)
        this.elements.getMoreDetailsLink()
            .should('be.visible')
            .should('contain', name);
    }
    checkNumberOfBikes() {
        this.elements.getAllBikes().should("have.length", 4);
    }
    checkBikes(name) {
        if (name === 'Original') {
            cy.contains("[data-test-id=city-product-list-item]", name);
        } else if (name === 'Deluxe 7') {
            cy.contains("[data-test-id=city-product-list-item]", name);
        } else if (name === 'Power 1') {
            cy.contains("[data-test-id=city-product-list-item]", name);
        }
        else {
            cy.contains("[data-test-id=city-product-list-item]", name);
        }

    }
    checkSideMenuBtn() {
        this.elements.getSideMenuBth()
            .should('be.visible')
            .click({ force: true });
    }
    checkSideMenuCloses() {
        this.elements.getCloseSideMenu()
            .click({ force: true });
    }
    checkCountryisUK(){
        this.elements.getCountryTxt()
        .should('have.id','Select country')
        //.and('have.deep.nested.property')
    }

    checkLanguage(language){
        this.elements.getLanguage()
        .should('contain',language);
    }

}
export default SearchLocator

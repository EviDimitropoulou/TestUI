/// <reference types="cypress" />



class PersonalDetailsLocators  {
    elements = {
        getFirstNameTxtFiels:()=> cy.get('input[name="firstname"]'),
        getPrefixTxtFields:()=>cy.get('input[name="lastnamePrefix"]'),
        getLastNameTxtFiels:()=> cy.get('input[name="lastname"]'),
        getDayTxtFiels:()=> cy.get('input[name="Day"]'),
        getMonthTxtFiels:()=> cy.get('input[name="Month"]'),
        getYearTxtFiels:()=> cy.get('input[name="Year"]'),
        getGenderFemaleFields:()=>cy.get('input[id="gender-female"]'),
        getGenderMaleFields:()=>cy.get('input[id="gender-male"]'),
        getGenderOtherFields:()=>cy.get('input[id="gender-other"]'),
        getHeighTxtFields:()=>cy.get('input[name="height"]'),
        getStreerTxtFields:()=>cy.get('input[name="street"]'),
        getHouseNumberTxtFields:()=>cy.get('input[name="houseNumber"]'),
        getAdditionTxtFields:()=>cy.get('input[name="houseNumberSuffix"]'),
        getPostalCodeTxtFields:()=>cy.get('input[name="postalCode"]'),
        getCityFields:()=>cy.get('input[name="city"]'),
        getCountryFields:()=>cy.get('[class="ng-tns-c102-2 ng-untouched ng-pristine"]'),
        getEmailAddressFields:()=>cy.get('input[name="email"]'),
        getTelephoneCode:()=>cy.get('input[name="telephonePrefix"]'),
        getTelephoneFields:()=>cy.get('input[name="telephoneNumber1"]'),
        getCommentsFields:()=>cy.get('input[name="deliveryRemarks"]'),
        getTooltip:()=>cy.get('[class="tooltip-button"]'),
        getTooltipWindow:()=>cy.get('[class="tooltip-window opened"]'),
        getTermsCheckBox:()=>cy.get('input[name="terms"]'),
        getGDPRCheckBox:()=>cy.get('input[name="gdprOptIn"]'),
        getNextButton:()=>cy.get('[data-met="Signup - Personal details - CTA"]'),
        getRequiredErrorMessage:()=>cy.get('[class="missing-message ng-star-inserted"]'),
        getErrorMessage:()=>cy.get('[class="error-message ng-star-inserted"]'),
        getBackButton:()=>cy.get('[class="back-button"]'),  
    }


    TypeFirstName(firstName){
        this.elements.getFirstNameTxtFiels().type(firstName);
    }
        TypePrefix(prefix){
        this.elements.getPrefixTxtFields().type(prefix);
    }
    TypeLastName(lastName){
        this.elements.getLastNameTxtFiels().type(lastName);
    }
    CheckGender(){
        this.elements.getGenderFemaleFields().check({force:true});
    }
    enterHeight(height){
        this.elements.getHeighTxtFields().type(height);
    }
   
    enterStreet(street){
        this.elements.getStreerTxtFields().type(street);
    }
    enterHouseNumber(HouseNumber){
        this.elements.getHouseNumberTxtFields().type(HouseNumber);
    }
    enterAddition(addition){
        this.elements.getAdditionTxtFields().type(addition);
    }
    enterPostalCode(postalCode){
        this.elements.getPostalCodeTxtFields().type(postalCode);
    }
    selectDay(){
        cy.get('select[name="Day"]')
        .select("29")
        .should('have.value', '29')
    }
    selectMonth(){
        cy.get('select[name="Month"]')
        .select("10")
         .should('have.value', '10')
    }
    selectYear(){
        cy.get('select[name="Year"]')
        .select("1993")
         .should('have.value', '1993')
    }

    enterCityField(city){
        this.elements.getCityFields().type(city);
    }
    
   enterEmailAddress(email){
    this.elements.getEmailAddressFields().type(email);
   }
   selectTelephoneCode(){
    cy.get('select[name="telephonePrefix"]')
    .select("+30 (GR)")
     .should('have.value', '+30')
   }

   enterPhone(phone){
    this.elements.getTelephoneFields().type(phone);
   }
    enterComments(comments){
        this.elements.getCommentsFields().type(comments);
    }

    checkCountryBtn(){
        cy.wait(5000)
    this.elements.getCountryFields()
    .should('exist')
    .should('not.be.enabled');
    }
   
    clickOnTermsAndConditions(){
        this.elements.getTermsCheckBox().check({force:true});
    }

    clickOnGDPR(){
        this.elements.getGDPRCheckBox().check({force:true});
    }

    clearNameField(){
        this.elements.getFirstNameTxtFiels().clear();
    }
    clickOnNextButton(){
        this.elements.getNextButton().click({force:true});
    }

    checkErrorMessage(text){
        this.elements.getErrorMessage()
        .should('contain',text)
    }

    checkRequiredErrorMessage(text){
        cy.wait(1000);
        this.elements.getRequiredErrorMessage()
        .should('contain',text)
        .should('have.css','color','rgb(254, 161, 6)');
        
    }
    clearLastNameField(){
        this.elements.getLastNameTxtFiels().clear();
    }
    enterInvalidName(){
        this.elements.getLastNameTxtFiels()
        .type("asf3")
    }
    checkInvalidErrorMessage(text){
        this.elements.getErrorMessage()
        .should('contain',text)
        .should('have.css','color','rgb(239, 85, 100)')
    }

//     OnHoverMsg()
//    {
//         this.elements.getTooltip()
//          .trigger('mouseover')
//          .invoke('show')
//         // cy.pause();
//        // cy.wait(5000)
//            this.elements.getTooltipWindow().should('exist')
//     }
        clickOnBackButton(){
            cy.wait(5000)
        //  cy.go(-1);
        this.elements.getBackButton().click({force:true});
        cy.visit('https://swapfiets.com/en-GB') // i do not like this approach



  }

}
export default PersonalDetailsLocators
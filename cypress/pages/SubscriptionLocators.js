/// <reference types="cypress" />

class SubscriptionLocators  {

    elements={
     
          getSubscriptionBtn:()=>cy.get('a[href*="power-1/configure"]'),
    
      //  getLoyalMembershipBtn:()=> cy.get('[data-test-id="radio-button"] input'),
        getLoyalMembershipBtn:()=> cy.get('span [value="loyal"]'),
      //    getFlexMembershipBtn:()=> cy.get('[data-test-id="radio-button"] input'),
        getFlexMembershipBtn:()=> cy.get('span [value="flexible"]'),
        getYesBikeUsageBtn:()=> cy.get('span [value="yes"]'),
        getNoBikeUsageBtn:()=> cy.get('span [value="no"]'),
        getOnOffTxbBox :()=> cy.get('[data-test-id="priceBlueBar.oneOff"]'),
        getMonthlyTxbBox :()=> cy.get('[data-test-id="priceBlueBar.monthly"]'),
        getOrderBikeBtn :()=> cy.get('[data-test-id="configure-submit-button"]'),
      
    }

    clickOnSubscriptionBtn(){
        this.elements.getSubscriptionBtn()
       .should('exist')
       .click({force:true});
    }

    checkLoyalMembershipBtn(){
      this.elements.getLoyalMembershipBtn()
      .should('exist')
      .should('be.checked')
      .and('have.value', 'loyal');
         
    }
    checkFlexMembershipBtn(){
        this.elements.getFlexMembershipBtn()
        .should('exist')
        .should('be.not.checked')
        .and('have.value', 'flexible');
       
      }

      checkMontlyFieldHasValue(cost){
        this.elements.getLoyalMembershipBtn()
        .should('be.checked');
        cy.wait(1000);
        this.elements.getYesBikeUsageBtn().check({force:true});
     
        this.elements.getMonthlyTxbBox()
        .should('contain',cost);
        this.elements.getOnOffTxbBox()
        .should('contain','£0.00');
      }

      checkOnOffHasValue(cost){
        this.elements.getFlexMembershipBtn().check({force:true});
       
        cy.wait(1000);
        this.elements.getYesBikeUsageBtn().check({force:true});
     
        this.elements.getOnOffTxbBox()
        .should('contain',cost);
      }

      clickOnOrderBikeBtn(){
        this.elements.getOrderBikeBtn().click({force:true});
    
      }

     

}

export default SubscriptionLocators
